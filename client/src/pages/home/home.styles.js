import styled from "styled-components";

export const Header = styled.header`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2060&q=80");
  min-height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;

  h1 {
    font-size: 60px;
    color: #fff;
    font-weight: 500;
    text-align: center;
  }

  @media screen and (min-width: 820px) and (max-width: 1156px) {
    height: 130vh;

    h1 {
      font-size: 3.5vw;
    }
  }

  @media only screen and (max-width: 819px) {
    height: 140vh;
    h1 {
      margin-top: 200px;
      font-size: 7vw;
    }
  }
`;

export const Container = styled.div`
  padding: 0 5%;

  @media screen and (max-width: 1500px) {
    padding: 0 10%;
  }
`;

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const SearchBar = styled.div`
  background-color: #fff;
  width: 70%;
  padding: 5px 10px 5px 25px;
  margin: 23px auto;
  border-radius: 25px;

  .dates {
    position: absolute;
    z-index: 2;
  }

  form {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  img {
    width: 20px;
    margin-top: 3px;
  }

  label {
    font-weight: 700;
    color: #333;
    font-size: 18px;
  }

  @media only screen and (max-width: 819px) {
    .dates {
      top: 286px;
      left: -50px;
    }
  }

  @media screen and (max-width: 1500px) {
    label {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 1500px) {
    margin: 30px auto;
    padding: 20px 10px 30px;
    border-radius: 5px;
    position: relative;

    form {
      display: block;
    }
  }
`;

export const Options = styled.div`
  z-index: 2;
  position: absolute;
  background-color: #fff;
  border-radius: 8px;
  -webkit-box-shadow: 10px 10px 10px -5px rgba(0, 0, 0, 0.4);
  box-shadow: 10px 10px 10px -5px rgba(0, 0, 0, 0.4);
  color: gray;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 819px) {
    top: 374px;
  }
`;

export const OptionItem = styled.div`
  width: 200px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;
export const OptionCounter = styled.div`
  display: flex;
  column-gap: 10px;
`;
export const OptionCounterButton = styled.button`
  display: flex;
  width: 30px;
  height: 30px;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 2px solid hsl(199, 100%, 33%);
  background-color: #fff;
  &:disabled {
    cursor: not-allowed;
  }
`;

export const SearchInput = styled.input`
  display: block;
  border: none;
  background: transparent;
  outline: none;
  font-size: 17px;
  margin-top: 15px;
  border-top: none;
  padding: 0px 7px 2px 7px;

  &::placeholder {
    color: #555;
  }

  &:focus {
    border-bottom: 2px solid hsl(199, 100%, 33%);
  }

  @media screen and (max-width: 1500px) {
    border: none;
    width: 100%;
    border-bottom: 2px solid #ddd;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }
`;

export const Select = styled.select`
  display: block;
  border: none;
  background: transparent;
  outline: none;
  font-size: 17px;
  margin-top: 15px;
  border-top: none;
  padding: 0px 7px 2px 7px;

  &:focus {
    border-bottom: 2px solid hsl(199, 100%, 33%);
  }

  @media screen and (max-width: 1500px) {
    width: 100%;
    border-bottom: 2px solid #ddd;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }
`;

export const SearchButton = styled.button`
  background-image: linear-gradient(
    to left,
    hsl(191, 85%, 43%),
    hsl(199, 100%, 33%)
  );
  width: 80px;
  height: 80px;
  border: none;
  border-radius: 50%;
  outline: none;
  transition: all 0.5s ease;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 5px;
  font-size: 15px;
  cursor: pointer;

  @media screen and (max-width: 1500px) {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
  }
`;

/*-- Popular Countries --*/

export const Subtitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 50px 0px 14px;
  flex-wrap: wrap;

  h2 {
    font-size: 35px;
    font-weight: 500;
    color: #333;
  }

  span {
    margin-top: 8px;
    color: gray;
  }
`;

export const Exclusives = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;

  @media only screen and (max-width: 320px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Properties = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 50px;
  margin-bottom: 30px;

  @media only screen and (max-width: 320px) {
    display: flex;
    flex-direction: column;
  }
`;

/*-- Section --*/

export const CostBenefitSection = styled.div`
  background-image: linear-gradient(
    to left,
    hsl(191, 85%, 43%),
    hsl(199, 100%, 33%)
  );
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0px;
  row-gap: 20px;

  h3 {
    font-size: 2vw;
  }

  span {
    font-size: 20px;
  }

  button {
    height: 50px;
    background: #e14358;
    color: white;
    border: none;
    border-radius: 3px;
    font-size: 18px;
    width: 200px;
    transition: all 0.5s ease;
  }

  @media screen and (max-width: 1500px) {
    h3 {
      font-size: 3vw;
    }
  }

  @media only screen and (max-width: 819px) {
    h3 {
      font-size: 6vw;
    }
  }

  @media screen and (max-width: 400px) {
    h3 {
      font-size: 7.5vw;
    }
  }

  @media only screen and (max-width: 320px) {
    span {
      font-size: 15px;
    }

    h3 {
      font-size: 7.8vw;
    }
  }
`;
export const Heat = styled.span`
  text-transform: uppercase;
  background: #e14358;
`;

/*-- Featured properties --*/

export const FP = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;

  @media only screen and (max-width: 320px) {
    width: 100%;
  }
`;

/* --About-- */

export const Aboutmsg = styled.div`
  margin: 95px 0px 40px 0px;
  text-align: center;
  font-size: 17px;
  h2 {
    margin-bottom: 20px;
    font-size: 28px;
    color: hsl(199, 100%, 33%);
  }

  p {
    padding: 0% 20%;
  }
`;
