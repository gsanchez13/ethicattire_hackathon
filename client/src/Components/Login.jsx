import React from 'react';
import { Switch, Route, withRouter, Link } from 'react-router-dom';
import Header from "./Header";
import About from "./About";

import Shops from "./Shops";

const Login = () => {
    return(
        <div>
            <div className="componentHeaderDiv">
                <h2 className="componentHeaderTag">Login</h2>
            </div>
            <div id="myClosetContentDiv">
                <p className="inputCaption">Username: </p>
                <input className="inputField" type="text" placeholder=" Username" />

                <p className="inputCaption">Password: </p>
                <input className="inputField" type="password" placeholder=" ***********" />
            </div>
            <div>
                <h5></h5>
            </div>
            <div>
                <nav id="HeaderNav">
                    <Link to="/about" ><h3 className="HeaderNavElements">About</h3></Link>{" "}
                    <Link to="/contact" ><h3 className="HeaderNavElements">Contact</h3></Link>{" "}
                    <Link to="/shops" ><h3 className="HeaderNavElements">Stores</h3></Link>{" "}
                </nav>  
            </div>
        </div>
    );
}

export default Login;