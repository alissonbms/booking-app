import { useNavigate, useSearchParams } from "react-router-dom";
import { BsCheck2Circle } from "react-icons/bs";
import { TfiFaceSad } from "react-icons/tfi";
import axios from "axios";
import { useContext } from "react";

//Styles
import { Container, Content, Payment } from "./paymentConfirmation.styles";

//Utilities
import { ReserveContext } from "../../contexts/ReserveContext";
import { TransactionContext } from "../../contexts/TransactionContext";
import { AuthContext } from "../../contexts/AuthContext";

//Components
import Loading from "../../components/loading/Loading";

const PaymentConfirmation = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { dispatch, selectedRoomsContext, allDatesContext } =
    useContext(ReserveContext);

  const { user } = useContext(AuthContext);

  const { propertyPhoto, propertyName, valuePayed } =
    useContext(TransactionContext);

  const success = searchParams.get("success");
  const canceled = searchParams.get("canceled");

  const handleInitialPage = () => {
    navigate("/");
  };

  const handleInitialPageFailure = () => {
    let keysToRemove = ["propertyPhoto", "propertyName", "valuePayed"];
    keysToRemove.forEach((k) => localStorage.removeItem(k));

    dispatch({ type: "RESET_RESERVE" });

    navigate("/");
  };

  if (canceled === "true") {
    let keysToRemove = ["propertyPhoto", "propertyName", "valuePayed"];
    keysToRemove.forEach((k) => localStorage.removeItem(k));

    dispatch({ type: "RESET_RESERVE" });

    setTimeout(() => {
      handleInitialPage();
    }, 3000);

    return (
      <Loading
        message="Reservation cancelled. You will be redirected to the home page.
        "
      />
    );
  }

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRoomsContext.map((room) => {
          const res = axios.patch(`/api/room/availability/${room}`, {
            dates: allDatesContext,
          });
          return res.data;
        })
      );

      await axios.post("/api/transaction", {
        customer: user.username,
        customerEmail: user.email,
        propertyPhoto,
        propertyName,
        valuePayed,
      });

      dispatch({ type: "RESET_RESERVE" });
    } catch (error) {
      console.log(error);
    } finally {
      navigate("/");
    }
  };

  return (
    <>
      <Container>
        <Content>
          {success === "true" && (
            <>
              <Payment>
                <BsCheck2Circle size={100} />
                <p>
                  Your reservation was almost successfully made, one thing is
                  missing...
                </p>
              </Payment>
              <button onClick={handleClick}>
                It's really necessary click here to confirm your reservation, so
                click and have a good stay!!
              </button>
            </>
          )}
          {success === "false" && (
            <>
              <Payment>
                <TfiFaceSad size={100} />
                <p>
                  There was an error trying to make your reservation. Please try
                  again.
                </p>
              </Payment>
              <button onClick={handleInitialPageFailure}>
                Go to home page
              </button>
            </>
          )}
        </Content>
      </Container>
    </>
  );
};

export default PaymentConfirmation;
