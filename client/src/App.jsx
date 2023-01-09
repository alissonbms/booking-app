import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useContext, useEffect } from "react";

//Styles
import "./App.css";

//Utilities
import {
  userColumns,
  propertyColumns,
  roomColumns,
} from "./admin/src/datatableSource";
import { AuthContext } from "./contexts/AuthContext";
import { DarkModeContext } from "./contexts/DarkModeContext";

//Pages
import HomeAdmin from "./admin/src/pages/home/HomeAdmin";
import ListData from "./admin/src/pages/listData/ListData";
import LoginAdmin from "./admin/src/pages/login/LoginAdmin";
import New from "./admin/src/pages/new/New";
import Single from "./admin/src/pages/single/Single";
import NewProperty from "./admin/src/pages/newProperty/NewProperty";
import NewRoom from "./admin/src/pages/newRoom/NewRoom";
import Home from "./pages/home/Home";
import Properties from "./pages/propertyList/PropertyList";
import Property from "./pages/property/Property";
import Login from "./pages/login-register/Login";
import Register from "./pages/login-register/Register";
import PaymentConfirmation from "./pages/paymentConfirmation/paymentConfirmation";

import MyAdminProvider from "./admin/src/MyAdminProvider";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user) {
    return children;
  } else {
    return <Navigate to="/admin/login" />;
  }
};

function App() {
  return (
    <div className="appteste">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/propertyList" element={<Properties />} />
          <Route path="/property/:id" element={<Property />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/payment-confirmation"
            element={<PaymentConfirmation />}
          />
          <Route element={<MyAdminProvider />}>
            <Route path="/admin/login" element={<LoginAdmin />} />
            <Route path="/admin">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <HomeAdmin />
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
                      <ListData
                        title={"Properties"}
                        columns={propertyColumns}
                      />
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
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
