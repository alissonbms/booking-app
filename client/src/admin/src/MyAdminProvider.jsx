import { Outlet } from "react-router-dom";
import { useContext } from "react";

//Styles
import "./styles/dark.scss";
import "./myAdminProvider.css";

//Utilities
import { DarkModeContext } from "../../contexts/DarkModeContext";

const MyAdminProvider = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "appteste2 dark" : "appteste2 light"}>
      <Outlet />
    </div>
  );
};
export default MyAdminProvider;
