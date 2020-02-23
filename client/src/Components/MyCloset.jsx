import React from "react";
import Header from "./Header";
import axios from "axios";
import GetItems from "./GetItems";

class MyCloset extends React.Component {
    constructor() {
        super();
        this.setState = {
            user: '1',
            data: []
        }
    }
    
    componentDidMount() {
        this.getAllItems()
    }
    getAllItems = async () => {
        try {
            let clothes = await axios.get("http://localhost:3000/items");
            console.log("clothes:", clothes);
            this.setState({
                data: clothes.data.payload
            });

        } catch (err) {
            console.log("ERROR:", err);
        }
    }
    render() {
        return (
            <div>
                <Header />
                <div className="componentHeaderDiv">
                    <h2 className="componentHeaderTag">Clothing Checklist</h2>
                </div>
                <div id="myClosetContentDiv">
                    <GetItems />
                </div>
            </div>
        );
    }
}
export default MyCloset;