import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//Styles
import { Input, Container, Wrapper, Title, Button, Advices } from "./styles";

//Components
import Loading from "../../components/loading/Loading";
import NavComponent from "../../components/nav/NavComponent";

//Utilities
import { AuthContext } from "../../contexts/AuthContext";

const Register = () => {
  const { user, error } = useContext(AuthContext);
  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
    setHasError(false);
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

    try {
      await axios.post(
        "https://abms-booking-app-api.onrender.com/api/auth/register",
        credentials
      );

      navigate("/login");
    } catch (error) {
      setRegisterError(error.response.data.message);
      setHasError(true);
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
          <Container className="registerC">
            <Wrapper>
              <Title>Register your details and be able to book rooms</Title>
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
              <Input
                type="text"
                placeholder="City"
                id="city"
                onChange={handleChange}
              />
              <Input
                type="text"
                placeholder="Country"
                id="country"
                onChange={handleChange}
              />
              <Input
                type="text"
                placeholder="Phone"
                id="phone"
                onChange={handleChange}
              />
              <Input
                type="text"
                placeholder="Paste the photo url"
                id="photo"
                onChange={handleChange}
              />
              <Button onClick={handleClick}>Register</Button>
              {hasError && <span className="error">{registerError}</span>}
              <Advices>
                <p onClick={() => navigate("/login")}>
                  Already have an account?
                </p>
              </Advices>
            </Wrapper>
          </Container>
        </>
      )}
    </>
  );
};

export default Register;
