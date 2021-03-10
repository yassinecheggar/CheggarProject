import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavbarContainer,
  NavIcon,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  Img
} from "./Navbar.elements";

function Navbar() {
  const [click, setClick] = useState(false);
  const handlclick = () => setClick(!click);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
               
              <Img src="image/logo.png" />
            </NavLogo>
            <MobileIcon onClick={handlclick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handlclick} click={click}>
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/Service">Services</NavLinks>
              </NavItem>
              
              <NavItem>
                <NavLinks to="/About">à propos</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/Contact">Contacte</NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
