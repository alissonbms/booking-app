import styled from "styled-components";

export const PropertyContainer = styled.div`
  padding: 0 12%;
  margin-top: 50px;

  @media only screen and (max-width: 819px) {
    margin-top: 100px;
  }
`;

export const PropertyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const PropertyTitle = styled.h1`
  font-weight: 600;
`;

export const PropertyAddress = styled.div`
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const PropertyImages = styled.div`
  display: grid;
  margin: 15px 0px;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  div img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    display: block;
    object-fit: cover;
  }

  @media only screen and (max-width: 1300px) {
    grid-template-columns: 1fr;
  }
`;

export const PropertyDetails = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  flex-wrap: wrap;

  @media only screen and (max-width: 1355px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

export const PropertyDetailsText = styled.div`
  flex-basis: 65%;

  p {
    margin-top: 20px;
  }
`;

export const PropertyDetailsPrice = styled.div`
  flex-basis: 30%;

  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;

  h1 {
    font-size: 27px;
    color: #555;
  }

  span {
    font-size: 15px;
  }

  h2 {
    font-weight: 300;
  }

  button {
    border: none;
    background-color: hsl(199, 100%, 33%);
    padding: 10px 20px;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    font-size: 17px;
  }

  @media only screen and (max-width: 1107px) {
    max-width: 620px;
  }
`;
