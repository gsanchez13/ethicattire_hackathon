import React, { Component } from 'react';
import M from 'materialize-css';

// ref can only be used on class components
class Example extends Component {
  // get a reference to the element after the component has mounted
  componentDidMount(){
    M.Sidenav.init(this.sidenav);
  }

  render(){
    return (
      <div>
        <a class="waves-effect waves-light btn">button</a>
        <a class="waves-effect waves-light btn"><i class="material-icons left">cloud</i>button</a>
        <a class="waves-effect waves-light btn"><i class="material-icons right">cloud</i>button</a>
      </div>
    )
  }
}

export default Example;