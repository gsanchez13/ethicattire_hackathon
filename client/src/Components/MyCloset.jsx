import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import ClosetScore from './ClosetScore';
import ItemUpload from './ItemUpload';
import "../App.css";

class MyCloset extends React.Component {
    constructor() {
        super();
        this.state = {
            user: '1',
            data: [],
            numOfItems: 0,
            numOfSusItems: 0
        }
    }

    async componentDidMount() {
            try {
                let clothes = await axios.get(`http://localhost:3000/items/types`);
                console.log("clothes.data.payload:", clothes.data.payload)
                console.log("clothes.data.payload[0].id:", clothes.data.payload[0].id);
                this.setState({
                    data: clothes.data.payload
                });
                let newData = [...this.state.data];
                console.log("newData:", newData);
                clothes.data.payload.map(element => {
                    if(element.item_type) {
                        newData.push(element.item_type)
                    }
                });
              
            console.log("state:", this.state);

        } catch (err) {
            console.log("ERROR:", err);
        }
        this.getCountOfItems();
    }
    getCountOfItems = async () => {
        try {
            let clothes = await axios.get(`http://localhost:3000/items/`);
            let susClothes = await axios.get(`http://localhost:3000/items/count/${this.state.user}`);
            console.log(susClothes)
            this.setState({
                numOfItems: clothes.data.payload.length,
                numOfSusItems: susClothes.data.payload[0].count
            });

        } catch (err) {
            console.log("ERROR:", err);
        }
    }

    render() {
        const { user, data, clothesId, numOfItems, numOfSusItems } = this.state;
        console.log("render method data:", data);
        return (
            <div id="myClosetContiner">
                <ClosetScore totalItems={numOfItems} susItems = {numOfSusItems}/>
                <div className="componentHeaderDiv">
                    <h2 id="ClothingChecklistHeaderTag" className="componentHeaderTag">Closet Score</h2>
                </div>
                <div id="myClosetContentDiv">
                    <div className="myClosetClothes">
                        {
                            data.map(element => {
                                return (
                                    <div className="FabricTypeDiv" key={element.clothes_type}>
                                        <Link to={`/closet/user/${user}/clothes/${element.id}`}><p className="myClosetClothes">{element.clothes_type}</p></Link>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <ItemUpload />
                </div>
            </div>
        );
    }
}
export default MyCloset;