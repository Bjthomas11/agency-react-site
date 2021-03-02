import React, { useState, useEffect } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemButton,
  NavLinks,
  NavButtonLink,
} from "./Nav.styles";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={closeMobileMenu}>
            <NavIcon />
            ULTRA
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              color="#fff"
              distance="lg"
              size={40}
            />
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to="/" onClick={closeMobileMenu}>
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/services" onClick={closeMobileMenu}>
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/products" onClick={closeMobileMenu}>
                Products
              </NavLinks>
            </NavItem>
            <NavItemButton>
              {button ? (
                <NavButtonLink to="/sign-up">
                  <Button primary>Sign Up</Button>
                </NavButtonLink>
              ) : (
                <NavButtonLink to="/sign-up">
                  <Button onClick={closeMobileMenu} primary fontBig>
                    Sign Up
                  </Button>
                </NavButtonLink>
              )}
            </NavItemButton>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
