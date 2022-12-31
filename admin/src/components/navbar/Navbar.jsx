import MenuIcon from "@mui/icons-material/Menu";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { useContext } from "react";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import MenuOpenSharpIcon from "@mui/icons-material/MenuOpenSharp";

//Styles
import "./navbar.scss";

//Utilities
import { SidebarContext } from "../../contexts/SidebarContext";
import { DarkModeContext } from "../../contexts/DarkModeContext";
import { AuthContext } from "../../contexts/AuthContext";

const Navbar = () => {
  const { setOpenSidebar, openSidebar } = useContext(SidebarContext);
  const { dispatch, darkMode } = useContext(DarkModeContext);
  const { user, authDispatch } = useContext(AuthContext);

  const handleDarkMode = () => {
    dispatch({ type: "DARK" });
    document.body.style.backgroundColor = "#111";
  };

  const handleLightMode = () => {
    dispatch({ type: "LIGHT" });
    document.body.style.backgroundColor = "#fff";
  };

  const handleLogout = () => {
    authDispatch({ type: "LOGOUT" });
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="logoContainer">
          {openSidebar ? (
            <CloseSharpIcon
              className="menuIcon"
              onClick={() => setOpenSidebar(!openSidebar)}
            />
          ) : (
            <MenuOpenSharpIcon
              className="menuIcon"
              onClick={() => setOpenSidebar(!openSidebar)}
            />
          )}
          <span className="logo">Admin</span>
        </div>

        <div className="items">
          <div className="item">
            {darkMode ? (
              <WbSunnyOutlinedIcon className="icon" onClick={handleLightMode} />
            ) : (
              <DarkModeOutlinedIcon className="icon" onClick={handleDarkMode} />
            )}
          </div>
          <div className="item">
            <img src={user.photo} alt="" className="avatar" />
          </div>
          <div className="item" onClick={handleLogout}>
            <LogoutIcon className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
