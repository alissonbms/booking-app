import styled from "styled-components";

export const Footer = styled.footer`
  text-align: center;
  a {
    text-decoration: none;
    color: hsl(199, 100%, 33%);
    opacity: 0.5;
    margin: 0px 10px;
    transition: all 0.3s ease;
  }

  a:hover {
    opacity: 1;
  }

  hr {
    margin: 28px 0px 10px 0px;
  }

  p {
    padding-bottom: 10px;
  }
`;
