import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//Styles
import { Input, Container, Wrapper, Title, Button, Advices } from "./styles";

//Components
import NavComponent from "../../components/nav/NavComponent";
import Loading from "../../components/loading/Loading";

//Utilities
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
  const { authDispatch, isAuthenticating, user, error } =
    useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
    setIsLoading(false);
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });

  const handleClick = async (e) => {
    e.preventDefault();

    authDispatch({ type: "AUTHENTICATION_START" });
    try {
      const response = await axios.post("/api/auth/Login", credentials);
      authDispatch({
        type: "AUTHENTICATION_SUCCESS",
        payload: response.data.details,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
      authDispatch({
        type: "AUTHENTICATION_FAILURE",
        payload: error.response.data,
      });
    }
  };

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <NavComponent />
          <Container>
            <Wrapper>
              <Title>Log in with your account and go book</Title>
              <Input
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleChange}
              />
              <Input
                type="email"
                placeholder="Email"
                id="email"
                onChange={handleChange}
              />
              <Input
                type="password"
                placeholder="Password"
                id="password"
                onChange={handleChange}
              />
              <Button disabled={isAuthenticating} onClick={handleClick}>
                Login
              </Button>
              <Advices>
                <p onClick={() => navigate("/admin/")}>
                  Want to see the dashboard?
                </p>
              </Advices>
              {error && <span className="error">{error.message}</span>}
            </Wrapper>
          </Container>
        </>
      )}
    </>
  );
};

export default Login;
