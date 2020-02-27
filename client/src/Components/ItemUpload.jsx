import React from 'react';
import axios from 'axios';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import './ItemUpload.css';

class Item extends React.Component {
  constructor(props) {
    super(props)
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
      const post = axios.post(`http://localhost:3000/items`, { item_img: res.data.imageUrl, fabric_id: fabChoice, clothes_id: typeChoice, user_id: 1, color: colorChoice })
    } catch (err) {
      console.log(err)
    }

  }


  //When creating options, get id and clothes_type
  //post should send id
  //input for image, input for color, select for fabric, select for clothes, user hard code


  populateSelect = () => {
    const { fabrics, types } = this.state
    let fabOpts = [];
    let typeOpts = [];

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
        <form onSubmit={this.handleSubmit}>
          <input className="ItemUploadInputs" type="file" onChange={this.handleFileInput} />

          <input id="colorChoiceInput" className="ItemUploadInputs" type='text' name='colorChoice' placeholder = 'color' onChange={this.handleInput} />

          <select className="ItemUploadInputs" name='fabChoice' onChange={this.handleInput}>
            {fabOptions}
          </select>

          <select className="ItemUploadInputs" name='typeChoice' onChange={this.handleInput}>
            {typeOptions}
          </select>

          <input id="ItemUploadButton" className="ItemUploadInputs" type='submit' value='upload' />
        </form>
      </div>
    )

  }
}

export default Item;