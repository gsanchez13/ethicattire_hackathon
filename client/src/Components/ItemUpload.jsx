import React from 'react';
import axios from 'axios';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';

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
      let fabOpts = [];
      let typeOpts = [];
      let fabrics = []
      let clothes = []
      console.log(fabResponse)
      fabResponse.data.payload.map(element => {
         fabrics.push(element.fabric_type)
      })
      tyResponse.data.payload.map(element => {
         clothes.push(element.clothes_type)
      })
      this.setState({
         fabrics: fabrics,
         types: clothes
      })
      // for (let i = 0; fabResponse.data.payload.length; i++) {
      //    fabOpts.push(<option value={fabResponse.data.payload[i]} key={fabResponse.data.payload[i]}></option>)
      // }
      // for (let x = 0; tyResponse.data.payload.length; x++) {
      //    typeOpts.push(<option value={tyResponse.data.payload[x]} key={tyResponse.data.payload[x]}></option>)
      // }
      // this.setState({
      //    fabOptions: fabOpts,
      //    typeOptions: typeOpts
      // })
      this.populateSelect()
   }

   handleInput = (event) => {
      const { name, value } = event.target
         this.setState({
            [name]: value
         })
   }

   handleSubmit = async (event) => {
      event.preventDefault();
      const { image, fabChoice, typeChoice, colorChoice } = this.state
      const data = new FormData()
      data.append('image', this.state.image)
      try {
         const res = await axios.post('http://localhost:3000/items', data)
         const post = axios.post(`http://localhost:3000/items`, { item_img: image, fabric_id: fabChoice, clothes_id: typeChoice, users_id: 1, color: colorChoice })
         this.setState({
            image: res.data.image,
         })
      } catch (err) {
         console.log(err)
      }

   }


   //When creating options, get id and clothes_type
   //post should send id
   //input for image, input for color, select for fabric, select for clothes, user hard code


   // populateSelect = () => {
   //    const { fabrics, types } = this.state
   //    let fabOpts = [];
   //    let typeOpts = [];
   //    console.log(fabrics)
   //    console.log(types)
   //    for (let i = 0; fabrics.length; i++) {
   //       fabOpts.push(<option value={fabrics[i]} key={fabrics[i]}></option>)
   //    }
   //    for (let x = 0; types.length; x++) {
   //       typeOpts.push(<option value={types[x]} key={types[x]}></option>)
   //    }
   //    this.setState({
   //       fabOptions: fabOpts,
   //       typeOptions: typeOpts
   //    })
   // }

   render() {
      let { image, fabrics, types, fabOptions, typeOptions, colorChoice } = this.state;

      return (
         <div>
            <p>Add an item</p>
            <form onSubmit={this.handleSubmit}>
               <input type="file" onChange={this.handleFileInput} />

               <input type='text' name='colorChoice' onChange={this.handleInput} />

               <select name='fabOptions' onChange={this.handleInput}>
                  {fabOptions}
               </select>

               <select name='typeOptions' onChange={this.handleInput}>
                  {typeOptions}
               </select>

               <input type='submit' value='upload' />
            </form>
         </div>
      )

   }
}

export default Item;