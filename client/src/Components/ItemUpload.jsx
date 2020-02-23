import React from 'react';
import axios from 'axios';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom'

this.state {
   fabrics: []
   types: []
}

handleFileInput = async (event) => {
   this.setState({
     imageFile: event.target.files[0],
   })
   const allImages = await axios.get('http://localhost:3001/images/all')
   const allImagesData = allImages.data.payload
   this.setState({
     imgId: allImagesData[allImagesData.length - 1].id + 1
   })
   let reader = new FileReader();
   reader.onloadend = () => {
     this.setState({
       imagePreviewUrl: reader.result
     });
   }
   reader.readAsDataURL(this.state.imageFile)
 }

render () {
   let { imagePreviewUrl } = this.state;

}