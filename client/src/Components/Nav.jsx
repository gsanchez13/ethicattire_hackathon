import React from "react";
import { Link } from "react-router-dom";
import "../Header.css";
import { Navbar, Icon, NavItem } from "react-materialize";

const Nav = () => {
  return (
    <div>
    <Navbar className="nav-wrapper white" alignLinks="right">

      <NavItem>
        <Link to="/mycloset">My Closet</Link>
      </NavItem>
      <NavItem>
        <Link to="/fabrics">Fabrics</Link>
      </NavItem>
      <NavItem>
        <Link to="/Shops">Shops </Link>
      </NavItem>
      <NavItem>
        <Link to="/info">Info </Link>
      </NavItem>
      <NavItem>
        <Link to="/mission">Mission </Link>
      </NavItem>
    </Navbar>
    </div>
  );
};

export default Nav;
