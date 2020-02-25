import React from 'react';
import { Switch, Route, withRouter, Link } from 'react-router-dom';
import LoginAbout from './LoginAbout';


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
                    <Link to="/user"><button id="createButton">Login</button></Link>

                </div>

            </form>

            <Switch>
                <Route path="/user" render={LoginAbout} />
            </Switch>
        </div>
    )
}

export default Login;