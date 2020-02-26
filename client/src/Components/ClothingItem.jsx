import React, { Component } from 'react';
import axios from "axios";
import { Switch, Route, withRouter, Link } from 'react-router-dom';
import Header from './Header';
import './ClothingItem.css';
class ClothingItem extends Component {
    constructor() {
        super();
        this.state = {
            user_id: "",
            clothing_id: "",
            clothes: []
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
            clothing_id: clothesId,
            clothes: usersItems,
        })
    }
    render() {
        const { clothes } = this.state;
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
                    <h3>{item.username}'s {item.clothes_type}</h3>
                    <img src={item.item_img} alt={item.clothes_type} className="clothes-image" />
                    <p><b>Fabric:</b> {" "}
                    <Link to={`/${item.fabric_type}`}>
                        {item.fabric_type}
                    </Link>
                    </p>
                </div>
            )
        })
        return (
            <div>
                <Header />
                <h1>User</h1>
                <div className="clothing-container">
                    {itemsCards}
                </div>
            </div>
        )
    }
}

export default ClothingItem;