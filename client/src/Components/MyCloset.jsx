import React from "react";
import Header from "./Header";
import axios from "axios";
import GetItems from "./GetItems";
import ClosetScore from './ClosetScore';

class MyCloset extends React.Component {
    constructor() {
        super();
        this.state = {
            user: '1',
            data: []
        }
    }

    async componentDidMount() {
            console.log(this.state.data)

            try {
                let clothes = await axios.get(`http://localhost:3000/items/`);
                console.log("clothes:", clothes);
                console.log(clothes.data.payload)
                let newData = [...this.state.data];
                console.log("newData:", newData);
                clothes.data.payload.map(element => {
                    newData.push(element.item_type)
                });

                this.setState({
                    data: newData
                });

            } catch (err) {
                console.log("ERROR:", err);
        }
    }

    render() {
        const { user, data } = this.state;
        return (
            <div>
                <Header />
                <ClosetScore />
                <div className="componentHeaderDiv">
                    <h2 className="componentHeaderTag">Clothing Checklist</h2>
                </div>
                <div id="myClosetContentDiv">
                {this.state.data ? (<GetItems data={data} />) : null}
                    
                </div>
            </div>
        );
    }
}
export default MyCloset;
