import { useState, useContext } from "react";
import { useAlert } from "react-alert";

//Styles
import "./newRoom.scss";

//Components
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
//Utilities
import { SidebarContext } from "../../contexts/SidebarContext";
import { UpdateContext } from "../../contexts/UpdateContext";
import { roomInputs } from "../../formSource";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const NewRoom = () => {
  const { updateData, isUpdating } = useContext(UpdateContext);
  const alert = useAlert();
  const navigate = useNavigate();
  const { openSidebar } = useContext(SidebarContext);
  const [info, setInfo] = useState({});
  const [propertyId, setPropertyId] = useState("");
  const [rooms, setRooms] = useState(
    isUpdating ? updateData.data.roomNumbers : []
  );

  const { data, isFetching } = useFetch("/api/property");

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    const roomNumbers = rooms.split(",").map((room) => ({
      number: Number(room),
    }));

    try {
      const newRoom = {
        ...info,
        roomNumbers,
      };

      if (isUpdating) {
        await axios
          .patch(`/api/room/${updateData.data._id}`, newRoom)
          .then(alert.success("Room updated successfully!"));
      } else {
        await axios
          .post(`/api/room/${propertyId}`, newRoom)
          .then(alert.success("Room created successfully!"));
      }
    } catch (error) {
      console.log(error);
    } finally {
      navigate("/room");
    }
  };

  return (
    <div className="new">
      {openSidebar ? <Sidebar /> : <></>}
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{isUpdating ? "Edit Room" : "Add new Room"}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              {roomInputs.map((input) => {
                return (
                  <div className="formInput" key={input.id}>
                    <label>{input.label}</label>

                    <input
                      onChange={handleChange}
                      type={input.type}
                      placeholder={
                        isUpdating
                          ? updateData.data[input.id]
                          : input.placeholder
                      }
                      id={input.id}
                    />
                  </div>
                );
              })}
              <div className="formInput">
                <label>Choose a property</label>
                <select
                  id="pId"
                  onChange={(e) => setPropertyId(e.target.value)}
                >
                  {isFetching
                    ? "await"
                    : data &&
                      data.map((property) => (
                        <option value={property._id} key={property._id}>
                          {property.name}
                        </option>
                      ))}
                </select>
              </div>

              <div className="formInput rooms">
                <label>Room Numbers</label>
                <textarea
                  defaultValue={
                    isUpdating
                      ? updateData.data.roomNumbers.map(
                          (roomNumber) => roomNumber.number
                        )
                      : []
                  }
                  onChange={(e) => setRooms(e.target.value)}
                  placeholder="Put a comma between the numbers, exactly like this: 20,30,40"
                />
              </div>
              <div className="formInput formButton">
                <button onClick={handleClick}>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRoom;
