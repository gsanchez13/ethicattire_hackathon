import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

import './ClothingItem.css';
class ClothingItem extends Component {
    constructor() {
        super();
        this.state = {
            user_id: "",
            clothing_id: "",
            clothes: [],
            article: "",
            sugAmount: ""
        }
    }
    componentDidMount = async () => {
        const userId = parseInt(this.props.match.params.userId);
        const clothesId = parseInt(this.props.match.params.clothesId);
        this.setClothingState(userId, clothesId)
    }
    getUsersItems = async (userId, clothesId) => {
        try {
            let allItems = await axios.get(`http://localhost:3000/items/user/${userId}/clothes/${clothesId}`);
            return allItems.data.payload;
        }
        catch (err) {
            console.log(err)
        }
    }
    setClothingState = async (userId, clothesId) => {
        let usersItems = await this.getUsersItems(userId, clothesId);
        this.setState({
            user_id: userId,
            username: usersItems.username,
            clothing_id: clothesId,
            clothes: usersItems.item,
            article: usersItems.clothes_type,
            sugAmount: usersItems.amount
        })
    }
    render() {
        const { clothes, article, username, amount } = this.state;
        const determineClassName = (score) => {
            if(score >= 1){
                return "green-clothing-item";
            }
            else {
                return "clothing-item";
            }
        }

        let itemsCards = clothes.map((item) => {
            return (
                <div className={determineClassName(item.score)} type={item.id}>
                    <h3>{username}'s {article}</h3>
                    <img src={item.img} alt={article} className="clothes-image" />
                    <p><b>Fabric:</b> {" "}
                    <Link to={`/${item.fabric}`}>
                        {item.fabric}
                    </Link>
                    </p>
                </div>
            )
        })
        if(amount <= clothes.length) {
            return (
                <div>
                    <h1>User</h1>
                    <div className="clothing-container">
                        {itemsCards}
                    </div>
                </div>
            )
        }
        else{
            return (
                <div>
                    <h1>not enough items</h1>
                </div>
            )
        }
    }
}

export default ClothingItem;