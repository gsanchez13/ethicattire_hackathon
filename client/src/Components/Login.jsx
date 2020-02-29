import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import '../login.css';
import MyCloset from './MyCloset';


const Login = () => {
    return (
        <div>
            <div className="">
                <h2 className="login-title">Login</h2>
            </div>
            <br></br><br></br>
            <form>
                <div id="login-box">
                    <input className="inputField" type="text" placeholder=" Username" />
                    <input className="inputField" type="password" placeholder=" ***********" />
                    <br></br>
                    <br></br>
                    <Link to="/myCloset" id='button'><button id="createButton">Log In</button></Link>


                    <br></br><br></br>
                    <br></br><br></br>
                    <br></br><br></br>
                    <br></br><br></br>
                    <br></br><br></br>
                    <br></br><br></br>
                    <br></br><br></br>
                    <br></br><br></br>
                    <br></br>
                    <p>No account? Sign up here! <button id="createButton">Sign Up</button></p>

                </div>

            </form>

            <Switch>
                <Route path="/mycloset" render={MyCloset} />
            </Switch>
        </div>
    )
}

export default Login;