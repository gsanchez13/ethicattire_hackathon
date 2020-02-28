import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import ItemUploadRender from './ItemUploadRender.jsx';


import './ClothingItem.css';
class ClothingItem extends Component {
    constructor() {
        super();
        this.state = {
            user_id: "",
            clothing_id: "",
            clothes: [],
            article: "",
            sugAmount: "",
            fabChoice: '',
            typeChoice: '',
            colorChoice: '',
            image: null,
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
    handleNewItem = async () => {
        this.setClothingState(this.state.user_id, this.state.clothing_id);
    }
    handleInput = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }
    handleFileInput = async (event) => {
        this.setState({
            image: event.target.files[0],
        })
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const { fabChoice, typeChoice, colorChoice } = this.state;
        const data = new FormData();
        data.append('image', this.state.image);
        try {
            const res = await axios.post('http://localhost:3000/upload', data);
            const post = await axios.post(`http://localhost:3000/items`, { item_img: res.data.imageUrl, fabric_id: fabChoice, clothes_id: typeChoice, user_id: 1, color: colorChoice })
            console.log(post, 'posting')
            this.setClothingState(this.state.user_id, this.state.clothing_id)
        } catch (err) {
            console.log(err)
        }

    }

    render() {
        const { clothes, article, username, sugAmount } = this.state;
        const determineClassName = (score) => {
            if (score >= 1) {
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
        if (sugAmount <= clothes.length) {
            return (
                <div>
                    <h1>{username}</h1>
                    <div className="clothing-container">
                        {itemsCards}
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <h1>{username}</h1>
                    <div className="clothing-container">
                        {itemsCards}
                        <div className="upload-item" onClick={this.handleNewItem}>
                            <ItemUploadRender handleFileInput={this.handleFileInput} handleInput={this.handleInput} handleSubmit={this.handleSubmit} />
                        </div>
                    </div>
                    <p>Need more clothes? Click <b><Link to="/shops"> here.</Link></b></p>
                </div>
            )
        }
    }
};

export default ClothingItem;