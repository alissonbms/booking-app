import styled from "styled-components";

export const Container = styled.div`
  padding: 0 10%;

  @media screen and (max-width: 1526px) {
    padding: 0 5%;
  }

  @media only screen and (max-width: 819px) {
    margin-top: 100px;
  }
`;

export const ListContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 250px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1050px) {
    flex-direction: column;
    margin-bottom: 100px;
    gap: 60px;
  }
`;

export const LeftCol = styled.div`
  flex-basis: 67%;

  h1 {
    color: #333;
    font-weight: 600;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 1526px) {
    img {
      min-width: 100%;
    }
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 10vh;
`;

export const RightCol = styled.div`
  flex-basis: 28%;
`;

/* SEARCH */

export const ListSearch = styled.div`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;
  padding: 10px;
  border-radius: 10px;
  position: sticky;
  top: 30px;

  & > button {
    padding: 10px;
    color: #fff;
    background-color: hsl(199, 100%, 33%);
    font-weight: bold;
    border: none;
    width: 100%;
    cursor: pointer;
    font-size: 17px;
  }
`;

export const LsItem = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin-top: 18px;
  font-size: 19px;

  & > input,
  select {
    height: 30px;
    padding: 5px;
    border: none;
    font-size: 17px;
  }

  & > span {
    background-color: white;
    height: 35px;
    display: flex;
    align-items: center;
    padding: 8px;
    cursor: pointer;
  }

  .dates {
    position: absolute;
    top: 290px;
  }

  @media only screen and (max-width: 819px) {
    .dates {
      left: -14px;
    }
  }
`;
/* OPTIONS */
export const LsOptions = styled.div`
  padding: 3px 10px;
`;

export const LsOptionItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 18px;

  input {
    width: 100px;
    outline: none;
    text-align: center;
    font-size: 17px;
  }
  input:focus {
  }
`;

/* NOT FOUND */

export const NotFound = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 1.2rem;
  padding-left: 20px;

  ul {
    li {
      margin-bottom: 10px;
      margin-left: 40px;
      font-size: 17px;
    }
  }
`;
