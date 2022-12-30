import { Input, Container, Wrapper, Title, Button } from "./styles";
import NavComponent from "../../components/nav/NavComponent";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/loading/Loading";
const Login = () => {
  const { dispatch, isAuthenticating, user, error } = useContext(AuthContext);
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

    dispatch({ type: "AUTHENTICATION_START" });
    try {
      const response = await axios.post("/api/auth/Login", credentials);
      dispatch({
        type: "AUTHENTICATION_SUCCESS",
        payload: response.data.details,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
      dispatch({
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
              {error && <span>{error.message}</span>}
            </Wrapper>
          </Container>
        </>
      )}
    </>
  );
};

export default Login;
