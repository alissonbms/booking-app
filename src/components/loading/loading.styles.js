import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-image: linear-gradient(
    to left,
    hsl(191, 85%, 43%),
    hsl(199, 100%, 33%)
  );

  flex-direction: column;
  z-index: 100;
  h1 {
    color: #fff;
    font-size: 2rem;
    margin-bottom: 25px;

    @media only screen and (max-width: 1000px) {
      max-width: 50%;
      text-align: center;
    }
  }
`;
