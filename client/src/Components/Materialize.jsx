import React, { Component } from 'react';
import { Button, Icon } from 'react-materialize';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
// import "example.css";

class Materialize extends Component {
    constructor() {
        super();
        this.state = {
            working: true
        }
    }
    render() {
        return(
            <Button id="exampleNav"
  className="blue"
  floating
  icon={<Icon>add</Icon>}
  large
  node="button"
  waves="light"
/>
        )
    }
}
export default Materialize;