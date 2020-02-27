import React from "react";
import { Link } from "react-router-dom";
import "../Header.css";

const Nav = () => {
  return (
    <div id="headerComponentContainer">
      <div id="nameOfAppDiv">
        <Link to="/myCloset">
          <h2 id="nameOfAppHeaderTag">Ethic Attire</h2>
        </Link>
      </div>
      <div id="navbarContainer">
        <nav id="HeaderNav">
          <Link to="/mycloset">
            <h3 className="HeaderNavElements">My Closet</h3>
          </Link>{" "}
          <Link to="/fabrics">
            <h3 className="HeaderNavElements">Fabrics</h3>
          </Link>{" "}
          <Link to="/shops">
            <h3 className="HeaderNavElements">Shops</h3>
          </Link>{" "}
          <Link to="/mission">
            <h3 className="HeaderNavElements">Mission</h3>
          </Link>{" "}
          <Link to="/info">
            <h3 className="HeaderNavElements">Info</h3>
          </Link>
          <Link to="/about">
            <h3 className="HeaderNavElements">About</h3>
          </Link>{" "}
        </nav>
      </div>
    </div>
  );
};

export default Nav;
