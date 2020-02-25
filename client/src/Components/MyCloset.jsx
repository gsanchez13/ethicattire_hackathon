import React from "react";
import Header from "./Header";
import axios from "axios";
import GetItems from "./GetItems";
import { Switch, Route, withRouter, Link } from 'react-router-dom';
import ClosetScore from './ClosetScore';


class MyCloset extends React.Component {
    constructor() {
        super();
        this.state = {
            user: '1',
            data: [],
            clothesId: ""
        }
    }

    async componentDidMount() {
            console.log(this.state.data)

            try {
                let clothes = await axios.get(`http://localhost:3000/items/`);
                console.log("clothes:", clothes);
                console.log("clothes.data:", clothes.data)
                console.log("clothes.data.payload[0].id:", clothes.data.payload[0].id);
                let newData = [...this.state.data];
                console.log("newData:", newData);
                clothes.data.payload.map(element => {
                    newData.push(element.item_type)
                });

                this.setState({
                    data: newData,
                    clothesId: clothes.data.payload[0].id
                });
                console.log("state:", this.state);

            } catch (err) {
                console.log("ERROR:", err);
        }
    }

    render() {
        const { user, data, clothesId } = this.state;
        return (
            <div>
                <Header />
                <ClosetScore />
                <div className="componentHeaderDiv">
                    <h2 className="componentHeaderTag">Clothing Checklist</h2>
                </div>
                <div id="myClosetContentDiv">
                {this.state.data ? (<Link to={`/closet/user/${user}/clothes/${clothesId}`}><GetItems data={data} /></Link>) : null}
                    
                </div>
            </div>
        );
    }
}
export default MyCloset;
