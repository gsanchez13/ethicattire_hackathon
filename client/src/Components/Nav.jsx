import React from "react";
import { Link } from "react-router-dom";
import "../css-files/Nav.css";

const Nav = () => {
  return (
    <div id="headerComponentContainer">
      <div id="nameOfAppDiv">
        <Link to="/myCloset">
        <img src={require('../logo.png')} alt='logo' className="logo"/>
          {/* <h2 id="nameOfAppHeaderTag">Ethic Attire</h2> */}
        </Link>
      </div>
      <div id="navbarContainer">
        <nav id="HeaderNav">
          <Link to="/mycloset">
            <h3 className="HeaderNavElements">MY CLOSET</h3>
          </Link>{" "}
          <Link to="/fabrics">
            <h3 className="HeaderNavElements">FABRICS</h3>
          </Link>{" "}
          <Link to="/shops">
            <h3 className="HeaderNavElements">SHOPS</h3>
          </Link>{" "}
          <Link to="/info">
            <h3 className="HeaderNavElements">WHAT IS SUSTAINABILITY?</h3>
          </Link>{" "}
          <Link to="/mission">
            <h3 className="HeaderNavElements">OUR MISSION</h3>
          </Link>{" "}
        </nav>
      </div>
    </div>
  );
};

export default Nav;
