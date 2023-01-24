import { MdLocationOn } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { add } from "date-fns/esm";

//Styles
import {
  PropertyAddress,
  PropertyContainer,
  PropertyDetails,
  PropertyDetailsPrice,
  PropertyDetailsText,
  PropertyImages,
  PropertyTitle,
  PropertyWrapper,
} from "./property.styles";

//Components
import NavComponent from "../../components/nav/NavComponent";
import Reserve from "../../components/reserve/Reserve";
import Loading from "../../components/loading/Loading.jsx";

//Utilities
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../contexts/SearchContext";
import { AuthContext } from "../../contexts/AuthContext";

const Property = () => {
  const { user } = useContext(AuthContext);
  const { dispatch, datesContext } = useContext(SearchContext);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const [isReady, setIsReady] = useState(false);
  const location = useLocation();
  const id = location.pathname.split("/").pop();
  const propertyName = location.state.propertyName;
  const propertyPhoto = location.state.propertyPhoto;
  const { data, isFetching } = useFetch(
    `https://abms-booking-app-api.onrender.com/api/property/find/${id}`
  );
  let diffDays = undefined;
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  const timeDiff = Math.abs(
    datesContext[0].endDate.getTime() - datesContext[0].startDate.getTime()
  );
  diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);

  const handleReserve = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/register");
    }
  };

  useEffect(() => {
    if (diffDays != undefined) {
      setIsReady(true);
    }
  }, []);

  return (
    <>
      {isReady === false ? (
        <Loading />
      ) : (
        <>
          <NavComponent />
          <PropertyContainer>
            <PropertyWrapper>
              {isFetching ? (
                <Loading />
              ) : (
                <>
                  <PropertyTitle>{data?.name}</PropertyTitle>
                  <PropertyAddress>
                    <MdLocationOn />
                    <span>{data?.address}</span>
                  </PropertyAddress>
                  <PropertyImages>
                    {data.photos?.map((photo, i) => (
                      <div key={i}>
                        <img src={photo} alt={i} />
                      </div>
                    ))}
                  </PropertyImages>
                  <PropertyDetails>
                    <PropertyDetailsText>
                      <PropertyTitle>{data.headline}</PropertyTitle>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures, to generate Lorem
                        Ipsum which looks reasonable. The generated Lorem Ipsum
                        is therefore always free from repetition, injected
                        humour, or non-characteristic words etc.
                      </p>
                    </PropertyDetailsText>

                    <PropertyDetailsPrice>
                      <h1>
                        {diffDays === 0
                          ? `Perfect for a morning and afternoon stay!`
                          : `Perfect for a ${diffDays}-night stay!`}
                      </h1>
                      <span>
                        Located in the real heart of {data.city}, this property
                        has an excellent location
                        {data.rating && ` score of ${data.rating}.0`}!
                      </span>
                      <h2>
                        <b>
                          $
                          {diffDays === 0
                            ? data.cheapestPrice
                            : diffDays * data.cheapestPrice}{" "}
                        </b>
                        {diffDays === 0
                          ? "peer room"
                          : `(${diffDays} nights) peer room`}
                      </h2>
                      <button onClick={handleReserve}>
                        Reserve or Book Now!
                      </button>
                    </PropertyDetailsPrice>
                  </PropertyDetails>
                </>
              )}
            </PropertyWrapper>
          </PropertyContainer>
          {openModal && (
            <Reserve
              setOpen={setOpenModal}
              propertyid={id}
              propertyName={propertyName}
              propertyPhoto={propertyPhoto}
            />
          )}
        </>
      )}
    </>
  );
};

export default Property;
