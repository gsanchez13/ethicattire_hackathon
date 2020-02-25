import React, { Component } from 'react';

class ClothingItem extends Component {
    constructor() {
        super();
        this.state = {
            user_id: "",
            clothing_id: ""
        }
    }
    componentDidMount = () => {
        const userId = this.props.params.match.id;
        const clothingId = this.props.params.match.id;
        this.setState({
            user_id: userId,
            clothing_id: clothingId
        })
    }
    render() {
        return(
            <div>
                <h1>User clothing component, to display the clothing items clicked on by the user based on type</h1>
            </div>
        )
    }
}

export default ClothingItem;