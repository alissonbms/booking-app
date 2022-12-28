import styled from "styled-components";

export const Container = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  font-size: 1.6rem;
  text-align: center;
  width: 500px;

  p {
    margin: 25px 0px;

    font-weight: 500;
  }

  button {
    padding: 10px 20px;
    border: none;
    color: #fff;
    font-size: 1.1rem;
    background-color: hsl(199, 100%, 33%);
    cursor: pointer;
  }
`;

export const Payment = styled.div`
  @media only screen and (max-width: 1000px) {
    max-width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
