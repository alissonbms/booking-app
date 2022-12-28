import { useNavigate, useSearchParams } from "react-router-dom";
import { Container, Content, Payment } from "./paymentConfirmation.styles";
import { BsCheck2Circle } from "react-icons/bs";
import { TfiFaceSad } from "react-icons/tfi";
import Loading from "../../components/loading/Loading";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ReserveContext } from "../../context/ReserveContext";

const PaymentConfirmation = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { dispatch, selectedRoomsContext, allDatesContext } =
    useContext(ReserveContext);

  const success = searchParams.get("success");
  const canceled = searchParams.get("canceled");

  const handleInitialPage = () => {
    navigate("/");
  };

  const handleInitialPageFailure = () => {
    dispatch({ type: "RESET_RESERVE" });

    navigate("/");
  };

  if (canceled === "true") {
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
