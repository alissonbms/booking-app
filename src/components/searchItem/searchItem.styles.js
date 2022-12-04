import styled from "styled-components";

export const Si = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  border: 2px solid #ddd;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 25px;
  width: 100%;

  img {
    height: 250px;
    flex: 2;
    object-fit: cover;
    object-position: center;
    border-radius: 12px;
    align-self: center;
  }
`;

export const SiDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  flex: 2;
`;

export const SiTitle = styled.h2`
  font-size: 24px;
  letter-spacing: 2px;
`;

export const SiDistance = styled.span`
  font-size: 16px;
  color: #555;
`;

export const SiSubtitle = styled.span`
  font-size: 16px; /* color: #fff; */
  color: #555; /* background-color: hsl(199, 100%, 33%); */
  font-size: 18px;
  max-width: max-content;
`;

export const SiFeatures = styled.span`
  font-size: 17px;
  font-weight: 600;
  padding-bottom: 2px;
`;

export const SiDetails = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  flex: 1;
  gap: 20px;
`;

export const SiRating = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  gap: 8px;

  span {
    font-size: 17px;
    font-weight: 500;
  }

  button {
    background-color: #bd0e54;
    color: white;
    padding: 5px;
    font-weight: bold;
    border: none;
  }
`;

export const SiDetailsTexts = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 8px;
`;

export const SiPrice = styled.span`
  font-size: 35px; /* font-weight: 700; */
  color: hsl(199, 100%, 33%);
  color: #bd0e54;
`;

export const SiTaxiOp = styled.span`
  font-size: 13px;
  color: black;
`;

export const SiCheckButton = styled.button`
  font-size: 17px;
  background-color: hsl(199, 100%, 33%);
  color: white; /* font-weight: bold; */
  padding: 10px 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
