import styled from "styled-components";

export const FeaturedCard = styled.div`
  flex: 1;
  min-width: 260px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  row-gap: 15px;
  border: 1px solid gray;
  transition: box-shadow 200ms ease 0s, transform 200ms ease 0s;
  border-radius: 4px;
  text-align: center;

  &:hover {
    box-shadow: -5px 6px hsl(191, 85%, 43%);
  }

  img {
    width: 100%;
    height: 360px;
    object-fit: cover;
    object-position: center;
    cursor: pointer;
  }
`;

export const FpName = styled.span`
  font-weight: bold;
  color: #333;
  cursor: pointer;
`;

export const FpCity = styled.span`
  font-weight: 300;
`;

export const FpPrice = styled.span`
  font-weight: 500;
`;

export const FpRating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 5px;

  span:nth-child(1) {
    background-color: #bd0e54;
    padding: 2px;
    color: white;
    border: none;
    font-size: 15px;
    font-weight: bold;
  }

  span:nth-child(2) {
    font-size: 14px;
  }
`;
