import React from 'react';
import { Switch, Route, withRouter, Link } from 'react-router-dom';
import Header from "./Header";
import About from "./About";

import Shops from "./Shops";

const Login = () => {
    return (
        <div>
            <div className="componentHeaderDiv">
                <h2 className="componentHeaderTag">Login</h2>
            </div>
            <form>
                <div id="myClosetContentDiv">
                    <p className="inputCaption">Username: </p>
                    <input className="inputField" type="text" placeholder=" Username" />

                    <p className="inputCaption">Password: </p>
                    <input className="inputField" type="password" placeholder=" ***********" />
                    <br></br>
                <input type = 'button' value = 'Log In'/>
                
                </div>
                
                </form>
         
        </div>
    );
}

export default Login;