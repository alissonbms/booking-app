import { useState, useContext } from "react";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import axios from "axios";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";

//Styles
import "./newProperty.scss";

//Components
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

//Utilities
import { SidebarContext } from "../../../../contexts/SidebarContext";
import { propertyInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";
import { UpdateContext } from "../../../../contexts/UpdateContext";

const NewProperty = () => {
  const { updateData, isUpdating } = useContext(UpdateContext);

  const alert = useAlert();
  const navigate = useNavigate();
  const { openSidebar } = useContext(SidebarContext);
  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({});

  const { data, isFetching } = useFetch(
    "https://abms-booking-app-api.onrender.com/api/room"
  );

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const list = await Promise.all(
        Object.values(files).map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "upload");

          const uploadRes = await axios.post(
            `https://api.cloudinary.com/v1_1/${
              import.meta.env.VITE_CLOUD_KEY
            }/image/upload`,
            data
          );

          const { url } = uploadRes.data;
          return url;
        })
      );

      const newProperty = {
        ...info,
        photos: list,
      };
      if (isUpdating) {
        await fetch(
          `https://abms-booking-app-api.onrender.com/api/property/${updateData.data._id}`,
          {
            method: "PATCH",
            credentials: "include",
            headers: {
              "Access-Control-Allow-Credentials": true,
            },
            body: newProperty,
          }
        ).then(alert.success("Property updated successfully!"));
      } else {
        await fetch("https://abms-booking-app-api.onrender.com/api/property", {
          method: "POST",
          credentials: "include",
          headers: {
            "Access-Control-Allow-Credentials": true,
          },
          body: newProperty,
        }).then(alert.success("Property created successfully!"));
      }
    } catch (error) {
      console.log(error);
    } finally {
      navigate("/admin/property");
    }
  };

  return (
    <div className="new">
      {openSidebar ? <Sidebar /> : <></>}
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{isUpdating ? "Edit Property" : "Add new Property"}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                files
                  ? isUpdating
                    ? updateData.data.photos[0]
                    : URL.createObjectURL(files[0])
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt={files ? "Picture" : "No image"}
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput formImage">
                <label htmlFor="file">
                  Images: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  className="fileInput"
                  type="file"
                  id="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                />
              </div>

              {propertyInputs.map((input) => {
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
                <label>Type</label>
                <select id="type" onChange={handleChange}>
                  <option value="Hotel">Hotel</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Cabin">Cabin</option>
                </select>
              </div>

              <div className="formInput">
                <label>Featured</label>
                <select id="featured" onChange={handleChange}>
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
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

export default NewProperty;
