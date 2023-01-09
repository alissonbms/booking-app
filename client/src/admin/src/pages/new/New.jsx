import { useState, useContext, useEffect } from "react";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useAlert } from "react-alert";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//Styles
import "./new.scss";

//Components
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

//Utilities
import { SidebarContext } from "../../../../contexts/SidebarContext";
import { UpdateContext } from "../../../../contexts/UpdateContext";
import { userInputs } from "../../formSource";

const New = () => {
  const { updateData, isUpdating } = useContext(UpdateContext);
  const alert = useAlert();
  const navigate = useNavigate();
  const { openSidebar } = useContext(SidebarContext);
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});
  const [photoUrl, setPhotoUrl] = useState("");
  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      if (file !== "") {
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

        if (isUpdating) {
          await axios
            .patch(`/api/user/${updateData.data._id}`, { ...info, photo: url })
            .catch((error) => {
              error
                ? alert.error(error.response.data.message)
                : alert.success("User updated successfully!");
            });
        } else {
          await axios
            .post(`/api/auth/register`, { ...info, photo: url })
            .then(alert.success("User created successfully!"));
        }
      } else {
        if (isUpdating) {
          await axios
            .patch(`/api/user/${updateData.data._id}`, { ...info })
            .catch((error) => {
              error
                ? alert.error(error.response.data.message)
                : alert.success("User updated successfully!");
            });
        } else {
          await axios
            .post(`/api/auth/register`, { ...info })

            .then(alert.success("User created successfully!"));
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      navigate("/admin/user");
    }
  };

  return (
    <div className="new">
      {openSidebar ? <Sidebar /> : <></>}
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{isUpdating ? "Edit User" : "Add new User"}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt={file ? "Picture" : "No image"}
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput formImage">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  className="fileInput"
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              {userInputs.map((input) => {
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
                <label>Password</label>
                <input onChange={handleChange} type="password" id="password" />
              </div>
              {isUpdating && (
                <div className="formInput">
                  <label>is Admin?</label>
                  <select id="isAdmin" onChange={handleChange}>
                    <option value={false}>No</option>
                    <option value={true}>Yes</option>
                  </select>
                </div>
              )}
              <div onClick={handleClick} className="formInput formButton">
                <button>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
