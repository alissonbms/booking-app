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

// @media screen and (max-width: 1526px) {

//   .siDesc {
//     align-items: center;
//   }

//   .siDetails {
//     align-items: center;
//   }
// }

// @media only screen and (max-width: 1020px) {
//   .siDesc {
//     align-items: center;
//     min-width: 100%;
//   }

//   .siDetails {
//     align-items: initial;
//   }

//   .listSearch {
//     /* text-align: center; */
//     /* max-width: 300px; */
//   }

//   /* .listSearch .lsItem {
//     align-items: center;
//   }
//   .list-container {
//     align-items: center;
//   } */
// }

export const ListContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 819px) {
    flex-direction: column;
    gap: 40px;
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

  & > input {
    height: 30px;
    padding: 8px;
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

  .date {
    position: absolute;
    top: 210px;
  }

  @media only screen and (max-width: 819px) {
    .date {
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
