import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import LightModeIcon from "@mui/icons-material/LightMode";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link } from "react-router-dom";
import { useContext } from "react";

//Styles
import "./sidebar.scss";

//Utilities
import { DarkModeContext } from "../../contexts/DarkModeContext";
import { AuthContext } from "../../contexts/AuthContext";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const { authDispatch } = useContext(AuthContext);

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
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">Lists</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>

          <p className="title">Useful</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>

          <p className="title">Service</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>

          <p className="title">User</p>
          <li>
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
