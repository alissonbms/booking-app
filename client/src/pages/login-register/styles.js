import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 20px;
`;

export const Advices = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    cursor: pointer;
    text-decoration: none;
  }

  p::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: hsl(199, 100%, 33%);
    transition: width 0.3s;
  }

  p:hover::after {
    width: 50%;
  }

  @media screen and (max-width: 800px) {
    p:hover::after {
      width: 80%;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;

  .error {
    padding: 5px 10px;
    box-shadow: 1px 1px 5px #555;
    color: red;
    font-size: 20px;
  }
`;

export const Title = styled.h1`
  width: 100%;
  font-size: 35px;
  background: linear-gradient(
    to right,
    hsl(191, 85%, 43%),
    hsl(199, 100%, 33%)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 980px) {
    font-size: 28px;
    text-align: center;
  }
  padding: 0px 20px;
`;

export const Input = styled.input`
  font-size: 20px;
  text-align: center;
  height: 50px;
  padding: 20px;
  width: 30vw;
  border-radius: 6px;
  border: none;

  @media screen and (max-width: 980px) {
    width: 55vw;
    font-size: 18px;
  }
`;

export const Button = styled.button`
  width: 30vw;
  height: 40px;
  font-size: 20px;
  border: none;
  padding: 10px 20px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border-radius: 6px;
  background: linear-gradient(to left, hsl(191, 85%, 43%), hsl(199, 100%, 33%));

  @media screen and (max-width: 980px) {
    width: 55vw;
  }
`;
