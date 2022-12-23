import { BarLoader } from "react-spinners";
import { Container } from "./loading.styles";

const Loading = ({ message }) => {
  return (
    <Container>
      <h1>{message ? message : "Loading, please wait..."}</h1>
      <BarLoader size={25} color={"#fff"} />
    </Container>
  );
};
export default Loading;
