import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//Styles
import "./login.scss";

//Utilities
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { authDispatch, isAuthenticating, user, error } =
    useContext(AuthContext);

  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
    email: undefined,
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    authDispatch({ type: "AUTHENTICATION_START" });
    try {
      const response = await axios.post("/api/auth/Login", credentials);

      if (response.data.isAdmin) {
        authDispatch({
          type: "AUTHENTICATION_SUCCESS",
          payload: response.data.details,
        });

        navigate("/");
      } else {
        authDispatch({
          type: "AUTHENTICATION_FAILURE",
          payload: { message: "You are not an administrator!" },
        });
      }
    } catch (error) {
      console.log(error);
      authDispatch({
        type: "AUTHENTICATION_FAILURE",
        payload: error.response.data,
      });
    }
  };

  return (
    <div className="loginContainer">
      <div className="loginInputsWrapper">
        <h1>Hello admin</h1>
        <h3>Ready to see what is going on?</h3>
        <input
          type="text"
          placeholder="Username"
          id="username"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
        />
        <button disabled={isAuthenticating} onClick={handleClick}>
          Login
        </button>
        <p onClick={() => (window.location.href = "http://127.0.0.1:3006")}>
          Go to BookingGood website
        </p>
        {error && <span>{error.message}</span>}
      </div>
      <div className="loginBackgroundWrapper">
        <img alt="data" src="../../../data.svg" />
      </div>
    </div>
  );
};

export default Login;
