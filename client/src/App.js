import React from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import Header from "./Components/Header";
import About from "./Components/About";
import Fabrics from "./Components/Fabrics";
import MyCloset from "./Components/MyCloset";
import Shops from "./Components/Shops";
import Mission from "./Components/Mission";
import Login from "./Components/Login";
import Contact from "./Components/Contact";

class App extends React.Component {
  state = {
    user: ""
  }

  render() {
    return (
      <div className="App">
          <Switch>
            <Route exact path="/" />
            <Route exact path="/about" component={About} />
            <Route exact path="/fabrics" component={Fabrics} />
            <Route exact path="/myCloset" component={MyCloset} />
            <Route exact path="/shops" component={Shops} />
            <Route exact path="/mission" component={Mission} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
      </div>
    );
  }
}

export default App;