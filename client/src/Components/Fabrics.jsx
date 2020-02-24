import React, { Component } from "react";
import axios from "axios";

import Header from "./Header";

class Fabrics extends Component {
    constructor(){
        super();
        this.state = {
            fabrics:[]
        }
    }

    componentDidMount(){
            this.getFabrics()
    }

    getFabrics = async () => {
        let fabricsUrl = "http://localhost:3000/fabrics"
        try {
            const response = await axios.get(fabricsUrl)
            console.log(response);
            
            const data = response.data.payload
            console.log(data);
            

            this.setState({
                fabrics:data
            })
        } catch (error) {
            console.log("error", error);
            
        }
    }

    render(){
        const {fabrics} = this.state
      return(
        <div>
            <Header />
            <div className="componentHeaderDiv">
                <h2 className="componentHeaderTag">Fabrics</h2>
                </div>
                <h3>What Are the Most Sustainable Fabrics?</h3>

                <div className="fabrics">
                    {fabrics.map(e => {
                    return <h3>{e.fabric_type}</h3>
                    })}
                

                    
                    </div>
            
            <div id="myClosetContentDiv">
                Bullet Points
            </div>
        </div>
    );
}
}

export default Fabrics;