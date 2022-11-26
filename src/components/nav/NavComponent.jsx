import logo12 from "../../assets/logo12.png";
import logo13 from "../../assets/logo13.png";

import { VscChromeClose } from "react-icons/vsc";
import { BsChevronDoubleDown } from "react-icons/bs";

import { useState } from "react";

import "./nav.styles.js";
import { AccountBtn, Logo, Nav, NavLinks } from "./nav.styles.js";

const NavComponent = ({ homeNav }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Nav homeNav={homeNav} visible={isVisible === true ? true : false}>
        <Logo src={homeNav === true ? logo13 : logo12} alt="logo BookinGood" />

        {homeNav && (
          <NavLinks>
            <li>
              <a href="#popular-countries">Popular Countries</a>
            </li>
            <li>
              <a href="#property-types">Property Types</a>
            </li>
            <li>
              <a href="#featured-properties">Featured Places</a>
            </li>
          </NavLinks>
        )}

        <AccountBtn homeNav={homeNav}>
          <a href="#">Register Now</a>
          <a href="#">Login</a>
          <div className="icons">
            {isVisible ? (
              <VscChromeClose
                className="menu-icon"
                size={32}
                onClick={() => setIsVisible(!isVisible)}
              />
            ) : (
              <BsChevronDoubleDown
                className="menu-icon"
                size={32}
                onClick={() => setIsVisible(!isVisible)}
              />
            )}
          </div>
        </AccountBtn>
      </Nav>
    </>
  );
};

export default NavComponent;
