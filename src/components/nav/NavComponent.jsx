import logo12 from "../../assets/logo12.png";
import logo13 from "../../assets/logo13.png";
import { useNavigate } from "react-router-dom";

import { VscChromeClose } from "react-icons/vsc";
import { BsChevronDoubleDown } from "react-icons/bs";

import { useContext, useState } from "react";

import "./nav.styles.js";
import { AccountBtn, Logo, Nav, NavLinks } from "./nav.styles.js";
import { AuthContext } from "../../context/AuthContext";

const NavComponent = ({ homeNav }) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <>
      <Nav homeNav={homeNav} visible={isVisible === true ? true : false}>
        <Logo
          src={homeNav === true ? logo13 : logo12}
          alt="logo BookinGood"
          onClick={() => navigate("/")}
        />

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
          {user ? (
            <a onClick={handleLogout}>
              Hello {user.username}, wanna do logout?
            </a>
          ) : (
            <>
              <a onClick={() => navigate("/register")}>Register Now</a>
              <a onClick={() => navigate("/login")}>Login</a>
            </>
          )}
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
