import React, { Component } from 'react';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css'

// ref can only be used on class components
class Example extends Component {
  // get a reference to the element after the component has mounted
  componentDidMount(){
    M.AutoInit();
  }

  render(){
    return (
        <div>
            <select>
              <option value="" disabled selected>Choose your option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
        </div>
      );
  }
}

export default Example;