import React from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import Nav from "./Components/Nav";
import About from "./Components/About";
import Fabrics from "./Components/Fabrics";
import MyCloset from "./Components/MyCloset";
import Shops from "./Components/Shops";
import Mission from "./Components/Mission";
import Login from "./Components/Login";
import Contact from "./Components/Contact";
import Cotton from "./Components/FabricItems/Cotton"
import Linen from "./Components/FabricItems/Linen"
import Silk from "./Components/FabricItems/Silk"
import Polyester from "./Components/FabricItems/Polyester"
import ClothingItem from "./Components/ClothingItem";
import Info from "./Components/Info"

class App extends React.Component {
  state = {
    user: ""
  }

  render() {
    return (
      <div className="App">
        <Nav/>
          <Switch>
            <Route exact path="/" component={MyCloset}/>
            <Route exact path="/about" component={About} />
            <Route exact path="/fabrics" component={Fabrics} />
            <Route exact path="/myCloset" component={MyCloset} />
            <Route exact path="/shops" component={Shops} />
            <Route exact path="/info" component={Info} />
            <Route exact path="/mission" component={Mission} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/Cotton" component={Cotton} />
            <Route exact path="/Linen" component={Linen} />
            <Route exact path="/Polyester" component={Polyester} />
            <Route exact path="/Silk" component={Silk} />
            <Route exact path={`/closet/user/:userId/clothes/:clothesId`} component={ClothingItem} />
          </Switch>
      </div>
    );
  }
}

export default App;