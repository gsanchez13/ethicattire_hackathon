import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../fabric.css'



class Fabrics extends Component {
  constructor() {
    super();
    this.state = {
      fabrics: []
    };
  }

  componentDidMount() {
    this.getFabrics();
  }

  getFabrics = async () => {
    let fabricsUrl = "http://localhost:3000/fabrics";
    try {
      const response = await axios.get(fabricsUrl);
      const data = response.data.payload;
      console.log(data);
      this.setState({
        fabrics: data
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  render() {
    const { fabrics } = this.state;
    return (
      <div className="main">
    
        
        
        <div className="fabrics">
        <h1 className="FabricTitle">Fabrics</h1>
          {fabrics.map(e => {
            return (
              // <div className="FabricBox" >
                <div className="Fabric-div" key={e.fabric_type}>
                <Link to={e.fabric_type} className="FabricTitle"><h2>{e.fabric_type}</h2></Link>
                <img className="FabricImg"src={e.fabric_img} alt={e.fabric_type}></img>
                <p className="FabricDesc">{e.fabric_desc}</p>
                </div>
              // </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Fabrics;
