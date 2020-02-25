import React, { Component } from 'react';
import axios from "axios";
import { Switch, Route, withRouter, Link } from 'react-router-dom';

class ClothingItem extends Component {
    constructor() {
        super();
        this.state = {
            user_id: "",
            clothing_id: "",
            clothes:[]
        }
    }
    componentDidMount = async () => {
        const userId = this.props.params.match.id;
        const clothingId = this.props.params.match.id;
        this.setClothingState = await (userId, clothingId);
    }
    getUsersItem = async (userId, clothesId) => {
        try {
            let allItems = await axios.get(`http://localhost:3000/items/user/${userId}/clothes/${clothesId}`).then((res) => res.payload.data);
            return allItems;
        }
        catch(err){
            console.log(err)
        }
    }
    getClothingState = async(userId, clothesId) => {
        let usersItems = await this.getUsersItem(userId, clothesId);
        this.setState({
            clothes: usersItems,
        })
    }
    render() {
        const { usersItems } = this.state;
        let itemsCards = usersItems.map((item) => {
            return(
                <div className="clothing-item" type={item.id}>
                    <h3>{item.username}'s {item.clothes_type}</h3>
                    <img src={item.item_img} alt={item.clothes_type} className="clothes-image"/>
                    <h4>Material:</h4>
                    <Link to={`/fabrics/${item.fabric_id}`}>
                    <p>{item.fabric_type}</p>
                    </Link>
                </div>
            )
        })
        return(
            <div>
                <h1>User's clothing!</h1>
                <div className="clothing-container">
                {itemsCards}
                </div>
            </div>
        )
    }
}

export default ClothingItem;