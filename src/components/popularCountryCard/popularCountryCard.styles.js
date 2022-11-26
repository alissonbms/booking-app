import styled from "styled-components";

export const CountryCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;

  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    object-position: center;
    display: block;
  }
`;

export const Layer = styled.div`
  cursor: pointer;
  letter-spacing: 1px;
  transition: 0.3s;
  text-align: center;
  left: 0;
  top: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  background: transparent;

  &:hover {
    background: hsl(191, 85%, 43%, 0.7);
  }

  h3 {
    width: 100%;
    color: #fff;
    bottom: 0;
    left: 50%;
    opacity: 0;
    transition: 0.3s;
    transform: translateX(-50%);
    position: absolute;
    font-size: 30px;
  }

  p {
    width: 100%;
    color: #fff;
    bottom: 0;
    left: 50%;
    opacity: 0;
    transition: 0.3s;
    transform: translateX(-50%);
    position: absolute;
    font-size: 22px;
  }

  &:hover h3 {
    bottom: 49%;
    opacity: 1;
  }

  &:hover p {
    bottom: 43%;
    opacity: 1;
  }
`;
