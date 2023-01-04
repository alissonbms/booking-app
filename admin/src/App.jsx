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
import { userColumns, propertyColumns, roomColumns } from "./datatableSource";

import { DarkModeContext } from "./contexts/DarkModeContext";
import { AuthContext } from "./contexts/AuthContext";
import NewProperty from "./pages/newProperty/newProperty";
import NewRoom from "./pages/newRoom/NewRoom";

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
          <Route path="login" element={<Login />} />
          <Route path="/">
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />

            <Route path="user">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <ListData title={"Users"} columns={userColumns} />
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
                    <New />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="property">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <ListData title={"Properties"} columns={propertyColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewProperty />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route path="room">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <ListData title={"Rooms"} columns={roomColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewRoom />
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
