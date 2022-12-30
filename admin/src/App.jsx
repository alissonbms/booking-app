import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
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
import { AuthContext } from "./contexts/AuthContext";

const App = () => {
  const { darkMode } = useContext(DarkModeContext);

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (user) {
      return children;
    } else {
      return <Navigate to="/login" />;
    }
  };
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Router>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="login" element={<Login />} />

            <Route path="users">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <ListData
                      dataColumns={userColumns}
                      dataRows={userRows}
                      title="Users"
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":userid"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <New title="Add new User" inputs={userInputs} />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="products">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <ListData
                      dataColumns={productColumns}
                      dataRows={productRows}
                      title="Products"
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":productid"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <New title="Add new Product" inputs={productInputs} />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
