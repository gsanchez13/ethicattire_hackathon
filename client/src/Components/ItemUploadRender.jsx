import React, { Component } from 'react';
import axios from 'axios';

class ItemUploadRender extends Component {
    constructor() {
        super();
        this.state = {
            fabrics: [],
            types: [],
            fabOptions: [],
            typeOptions: [],
            fabChoice: '',
            typeChoice: '',
            colorChoice: '',
            image: null,
        }
    }

    async componentDidMount() {
        let fabResponse = await axios.get('http://localhost:3000/fabrics');
        let tyResponse = await axios.get('http://localhost:3000/items/types');

        let fabricNames = [];
        let clothesNames = [];

        for (let i = 0; i < fabResponse.data.payload.length; i++) {
            fabricNames.push(fabResponse.data.payload[i].fabric_type);
        }
        for (let i = 0; i < tyResponse.data.payload.length; i++) {
            clothesNames.push(tyResponse.data.payload[i].clothes_type);
        }

        this.setState({
            fabrics: fabricNames,
            types: clothesNames
        })

        this.populateSelect();
    }
    populateSelect = () => {
        const { fabrics, types } = this.state
        let fabOpts = [];
        let typeOpts = [];
        fabOpts.push(<option value={''} key={''}>Choose a fabric</option>)
        typeOpts.push(<option value={''} key={''}>Choose a Clothing Type</option>)

        for (let i = 0; i < fabrics.length; i++) {
            fabOpts.push(<option value={i + 1} key={fabrics[i]}>{fabrics[i]}</option>);
        }
        for (let i = 0; i < types.length; i++) {
            typeOpts.push(<option value={i + 1} key={types[i]}>{types[i]}</option>);
        }

        this.setState({
            fabOptions: fabOpts,
            fabChoice: `${fabOpts[0].props.value}`,
            typeOptions: typeOpts,
            typeChoice: `${typeOpts[0].props.value}`
        })
    }

    render() {
        let { fabOptions, typeOptions } = this.state;

        return (
            <div>
                <p>Add an item</p>
                <form onSubmit={this.props.handleSubmit}>
                    <input className="ItemUploadInputs" type="file" onChange={this.props.handleFileInput} required />

                    <input id="colorChoiceInput" className="ItemUploadInputs" type='text' name='colorChoice' placeholder='color' onChange={this.props.handleInput} />

                    <select className="ItemUploadInputs" name='fabChoice' onChange={this.props.handleInput} required>
                        {fabOptions}
                    </select>

                    <select className="ItemUploadInputs" name='typeChoice' onChange={this.props.handleInput} required>
                        {typeOptions}
                    </select>

                    <input id="ItemUploadButton" className="ItemUploadInputs" type='submit' value='upload' required />
                </form>
            </div>
        )

    }
}

export default ItemUploadRender;