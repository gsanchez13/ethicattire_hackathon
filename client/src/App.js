import React from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
// import Header from "./Components/Header";
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
            <Route path="/about" component={About} />
            <Route path="/fabrics" component={Fabrics} />
            <Route path="/myCloset" component={MyCloset} />
            <Route path="/shops" component={Shops} />
            <Route path="/mission" component={Mission} />
            <Route path="/login" component={Login} />
            <Route path="/contact" component={Contact} />
          </Switch>
      </div>
    );
  }
}

export default App;