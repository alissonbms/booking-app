import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { SearchContext } from "../../context/SearchContext";
import useFetch from "../../hooks/useFetch";
import {
  ReserveContainer,
  ReserveWrapper,
  RoomInfo,
  RoomItem,
  ReserveButton,
  RoomTitle,
  RoomDesc,
  RoomMax,
  RoomPrice,
  SelectRooms,
  PleaseWait,
} from "./reserve.styles";
import Loading from "../loading/Loading";
import { ClockLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { ReserveContext } from "../../context/ReserveContext";

const Reserve = ({ setOpen, propertyid, propertyName, propertyPhoto }) => {
  const navigate = useNavigate();
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const buyRooms = [
    { name: "Rooms", price: totalPrice, quantity: selectedRooms.length },
  ];

  const { datesContext } = useContext(SearchContext);
  const { dispatch, selectedRoomsContext, allDatesContext } =
    useContext(ReserveContext);

  const { data, isFetching, error } = useFetch(
    `/api/property/rooms/${propertyid}`
  );

  const handleSelect = (value, checked, price) => {
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );

    setTotalPrice(checked ? totalPrice + price : totalPrice - price);
  };

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate.setHours(0, 0, 0, 0));
    const end = new Date(endDate.setHours(0, 0, 0, 0));

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const allDates = getDatesInRange(
    datesContext[0].startDate,
    datesContext[0].endDate
  );

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      allDates.includes(new Date(date).getTime())
    );

    return isFound;
  };

  const handleClick = async () => {
    if (!selectedRooms.length) {
      return setHasError(true);
    }

    await dispatch({
      type: "NEW_RESERVE",
      payload: {
        allDatesContext: allDates,
        selectedRoomsContext: selectedRooms,
      },
    });

    try {
      setIsLoading(true);

      const close = () => {
        setOpen(false);
      };

      localStorage.setItem("propertyName", JSON.stringify(propertyName));
      localStorage.setItem("propertyPhoto", JSON.stringify(propertyPhoto));
      localStorage.setItem("valuePayed", JSON.stringify(totalPrice));

      const { data } = await axios.post(`/api/stripe/create-checkout-session`, {
        buyRooms,
      });

      close();
      window.location.href = data.url;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log(datesContext);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ReserveContainer>
            <ReserveWrapper>
              <IoMdCloseCircle
                className="closeIcon"
                onClick={() => setOpen(false)}
              />
              {isFetching ? (
                <>
                  <PleaseWait>
                    <h1>Please wait</h1>
                    <ClockLoader />
                  </PleaseWait>
                </>
              ) : (
                <>
                  <span className="headline">Select your rooms:</span>
                  {data.map((item) => (
                    <RoomItem className="rItem" key={item._id}>
                      <RoomInfo>
                        <RoomTitle>{item.title}</RoomTitle>
                        <RoomDesc>· {item.description}</RoomDesc>
                        <RoomMax>
                          · Max people: <b>{item.maxPeople}</b>
                        </RoomMax>
                        <RoomPrice>
                          · Price:
                          <b> ${item.price}</b>
                        </RoomPrice>
                      </RoomInfo>

                      <SelectRooms>
                        {item.roomNumbers.map((roomNumber) => (
                          <div className="room" key={roomNumber._id}>
                            <label>{roomNumber.number}</label>
                            <input
                              type="checkbox"
                              value={roomNumber._id}
                              onChange={(e) =>
                                handleSelect(
                                  e.target.value,
                                  e.target.checked,
                                  item.price
                                )
                              }
                              disabled={isAvailable(roomNumber)}
                            />
                          </div>
                        ))}
                      </SelectRooms>
                    </RoomItem>
                  ))}
                  {hasError && (
                    <div className="errorSpan">
                      <span>You need to select at least one room</span>
                    </div>
                  )}
                  <ReserveButton onClick={handleClick}>
                    Reserve Now!
                  </ReserveButton>
                </>
              )}
            </ReserveWrapper>
          </ReserveContainer>
        </>
      )}
    </>
  );
};

export default Reserve;
