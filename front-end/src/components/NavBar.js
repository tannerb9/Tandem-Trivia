import React from "react";
import { Nav, NavbarBrand, NavItem, NavLink } from "reactstrap";

const NavBar = () => {
  return (
    <Nav className="main-nav justify-content-center" tabs>
      <NavbarBrand className="font-weight-bold">
        Tandem Trivia
      </NavbarBrand>
      {/* <NavItem>
        <NavLink href="/">
          <div>
            <img
              alt="Tandem Trivia"
              src="assets/img/android-chrome-512x512.png"
            />
          </div>
        </NavLink>
      </NavItem> */}
      {/* <NavItem>
        <NavLink href="/classic">Classic</NavLink>
      </NavItem> */}
      {/* <NavItem>
        <NavLink href="/testyourmight">Test Your Might</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/highscores">Highscores</NavLink>
      </NavItem> */}
    </Nav>
  );
};

export default NavBar;
