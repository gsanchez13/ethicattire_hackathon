import React from "react";
import { Link } from "react-router-dom";
import "../Header.css";
//import { Navbar, Icon, NavItem } from "react-materialize";

const Nav = () => {
  return (

   <nav>
    <div class="nav-wrapper">
      <Link exact to="/mycloset" id="Logo" className="brand-logo">Ethic Attire</Link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li className="HeaderNavElements"><Link exact to="/mycloset">My Closet</Link></li>
        <li className="HeaderNavElements"><Link exact to="/fabrics">Fabrics</Link></li>
        <li className="HeaderNavElements"><Link exact to="/shops">Shops</Link></li>
        <li className="HeaderNavElements"><Link exact to="/info">What is Sustainabilty</Link></li>
        <li className="HeaderNavElements"><Link exact to="/mission">About</Link></li>
      </ul>
     </div>
    </nav>
// <div>
//     <Navbar className="nav-wrapper white" alignLinks="right">

//       <NavItem>
//         <Link to="/mycloset">My Closet</Link>
//       </NavItem>
//       <NavItem>
//         <Link to="/fabrics">Fabrics</Link>
//       </NavItem>
//       <NavItem>
//         <Link to="/Shops">Shops </Link>
//       </NavItem>
//       <NavItem>
//         <Link to="/info">Info </Link>
//       </NavItem>
//       <NavItem>
//         <Link to="/mission">Mission </Link>
//       </NavItem>
//     </Navbar>
  //   </div>
  // </nav>

  );
};

export default Nav;

// Old code

    // <div id="headerComponentContainer">
    //   <div id="nameOfAppDiv">
    //     <Link to="/myCloset">
    //       <h2 id="nameOfAppHeaderTag">Ethic Attire</h2>
    //     </Link>
    //   </div>
    //   <div id="navbarContainer">
    //     <nav id="HeaderNav">
    //       <Link to="/mycloset">
    //         <h3 className="HeaderNavElements">My Closet</h3>
    //       </Link>{" "}
    //       <Link to="/fabrics">
    //         <h3 className="HeaderNavElements">Fabrics</h3>
    //       </Link>{" "}
    //       <Link to="/shops">
    //         <h3 className="HeaderNavElements">Shops</h3>
    //       </Link>{" "}
    //       <Link to="/info">
    //         <h3 className="HeaderNavElements">What is Sustainabilty?</h3>
    //       </Link>{" "}
    //       <Link to="/mission">
    //         <h3 className="HeaderNavElements"> Our Mission</h3>
    //       </Link>{" "}
    //     </nav>
    //   </div>
    // </div>