import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useContext } from "react";

// Styles
import "./App.css";
import "./styles/dark.scss";

//Pages
import Home from "./pages/home/Home";
import ListData from "./pages/listData/ListData";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";

//Utilities
import { userInputs, productInputs } from "./formSource";
import {
  userColumns,
  productColumns,
  userRows,
  productRows,
} from "./datatableSource";
import { DarkModeContext } from "./contexts/DarkModeContext";

const App = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />

            <Route path="users">
              <Route
                index
                element={
                  <ListData
                    dataColumns={userColumns}
                    dataRows={userRows}
                    title="Users"
                  />
                }
              />
              <Route path=":userid" element={<Single />} />
              <Route
                path="new"
                element={<New title="Add new User" inputs={userInputs} />}
              />
            </Route>
            <Route path="products">
              <Route
                index
                element={
                  <ListData
                    dataColumns={productColumns}
                    dataRows={productRows}
                    title="Products"
                  />
                }
              />
              <Route path=":productid" element={<Single />} />
              <Route
                path="new"
                element={<New title="Add new Product" inputs={productInputs} />}
              />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
