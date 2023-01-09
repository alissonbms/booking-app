import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HotelIcon from "@mui/icons-material/Hotel";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import LightModeIcon from "@mui/icons-material/LightMode";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

//Styles
import "./sidebar.scss";

//Utilities
import { DarkModeContext } from "../../../../contexts/DarkModeContext";
import { AuthContext } from "../../../../contexts/AuthContext";

const Sidebar = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(DarkModeContext);
  const { authDispatch, user } = useContext(AuthContext);

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
    <div className="sidebar">
      <div className="center">
        <ul>
          <Link to="/admin/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">Lists</p>
          <Link to="/admin/user" style={{ textDecoration: "none" }}>
            <li>
              <PersonIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/admin/property" style={{ textDecoration: "none" }}>
            <li>
              <HomeWorkIcon className="icon" />
              <span>Properties</span>
            </li>
          </Link>
          <Link to="/admin/room" style={{ textDecoration: "none" }}>
            <li>
              <HotelIcon className="icon" />
              <span>Rooms</span>
            </li>
          </Link>
          <li>
            <LocalShippingIcon className="icon" />
            <span>----</span>
          </li>

          <p className="title">Useful</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>----</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>----</span>
          </li>

          <p className="title">Service</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>----</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>----</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>----</span>
          </li>

          <p className="title">User</p>
          <li onClick={() => navigate(`/admin/user/${user._id}`)}>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li onClick={handleLogout}>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>

      <div className="bottomSidebar">
        <div onClick={handleLightMode} className="colorOption">
          <span>LightMode</span>
          <LightModeIcon className="icon" />
        </div>
        <div onClick={handleDarkMode} className="colorOption">
          <span>DarkMode</span>
          <DarkModeIcon className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
