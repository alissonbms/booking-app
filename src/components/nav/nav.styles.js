import styled from "styled-components";

export const Nav = styled.nav`
  ${(props) =>
    props.homeNav === true
      ? ""
      : "box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;"};

  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 1%;
  overflow: hidden;
  max-height: 100px;

  transition: max-height ease 0.5s;

  .menu-icon {
    ${(props) =>
      props.homeNav === true ? "color: #fff" : "color: hsl(199, 100%, 33%)"};
    display: none;
  }

  @media only screen and (max-width: 819px) {
    ${(props) =>
      props.homeNav === true
        ? "background-image: linear-gradient(to left, hsl(191, 85%, 43%),hsl(199, 100%, 33%));"
        : "background-color: #fff"};

    ${(props) => (props.visible === true ? "max-height: 380px;" : "")}

    position: fixed;
    top: -28px;
    padding: 100px 7% 0;
    z-index: 3;
    display: inline-block;

    .menu-icon {
      display: block;
      position: fixed;
      top: 2.5%;
      right: 7%;
      cursor: pointer;
    }
  }

  @media screen and (min-width: 820px) and (max-width: 1156px) {
    max-height: 150px;
  }
  @media only screen and (max-width: 370px) {
    .menu-icon {
      right: 2.8%;
      top: 3%;

      /* height: 80vh;
      object-fit: contain; */
    }
  }
`;

export const NavLinks = styled.ul`
  li {
    list-style: none;
    display: inline-block;
    margin: 10px 30px;
  }

  a {
    text-decoration: none;
    color: #fff;
    font-size: 17px;
  }

  a::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: #fff;
    transition: width 0.3s;
  }

  a:hover::after {
    width: 50%;
  }

  @media screen and (min-width: 820px) and (max-width: 1156px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (max-width: 819px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      display: flex;
      margin: 10px 0px;

      a {
        font-size: 18px;
      }
    }

    :target {
      scroll-margin-top: 300px;
    }
  }
`;

export const AccountBtn = styled.div`
  display: flex;
  column-gap: 0.75rem;

  a {
    text-decoration: none;
    padding: 8px 20px;
    border-radius: 20px;
    transition: all 0.5s ease;
    border: none;
    font-weight: 700;
    outline: none;
    color: #fff;
    background-color: hsl(199, 100%, 33%);
    cursor: pointer;
  }

  @media only screen and (max-width: 819px) {
    justify-content: center;

    a {
      margin: 15px 0 30px;
      width: 100%;
      text-align: center;

      ${(props) =>
        props.homeNav === true
          ? "background-color: #fff; color: hsl(199, 100%, 33%);"
          : ""}
    }
  }
`;

export const Logo = styled.img`
  cursor: pointer;
  width: 281px;
  height: 50px;
  @media only screen and (max-width: 819px) {
    position: fixed;
    top: 1.5%;
    left: 2%;
  }

  @media only screen and (max-width: 370px) {
    left: 1%;
    width: 80vw;
    object-fit: contain;
  }
`;
