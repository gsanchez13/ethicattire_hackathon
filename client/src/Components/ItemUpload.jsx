import React from 'react';
import axios from 'axios';
import './ItemUpload.css';
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

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



    openFabrics: false,
    openTypes: false


    }
  }

  async componentDidMount() {
    console.log("component mounted", this.state)
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
        console.log("component mounted 1", this.state)

  }

  
  handleChange = event => {
      //setAge(event.target.value);
      this.setState({
        age: event.target.value
      });
  }

  handleCloseForFabric = () => {
      //setOpen(false);
      this.setState({
        openFabrics: false
      });
  }


  handleOpenForFabric = () => {
      //setOpen(true);
      this.setState({
        openFabrics: true
      });
    }

    handleCloseForType = () => {
      //setOpen(false);
      this.setState({
        openTypes: false
      });
  }


  handleOpenForType = () => {
      //setOpen(true);
      this.setState({
        openTypes: true
      });
    }










  handleInput = (event) => {
    const { name, value } = event.target;
    console.log("event", event.target.value, name)
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
    fabOpts.push(<MenuItem value={''} key={''}>Choose a fabric</MenuItem>)
    typeOpts.push(<MenuItem value={''} key={''}>Choose a Clothing Type</MenuItem>)

    for (let i = 0; i < fabrics.length; i++) {
      fabOpts.push(<MenuItem value={i + 1 || ""} key={fabrics[i]}>{fabrics[i]}</MenuItem>);
    }
    for (let i = 0; i < types.length; i++) {
      typeOpts.push(<MenuItem value={i + 1 || ""} key={types[i]}>{types[i]}</MenuItem>);
    }

    this.setState({
      fabOptions: fabOpts,
      fabChoice: `${fabOpts[0].props.value}`,
      typeOptions: typeOpts,
      typeChoice: `${typeOpts[0].props.value}`
    })
  }

  render() {
    let { fabOptions, typeOptions, openFabrics, openTypes } = this.state; 
    //const [age, setAge] = React.useState("");
    //const [open, setOpen] = React.useState(false);

    

    return (
      <div>
        <p>Add an item</p>
        <form onSubmit={this.handleSubmit}>
          <input className="ItemUploadInputs" type="file" onChange={this.handleFileInput} required/>

          {/* <input id="colorChoiceInput" className="ItemUploadInputs" type='text' name='colorChoice' placeholder = 'color' onChange={this.handleInput} /> */}

          <div id="colorChoiceInput" class="input-field col s6">
            <input id="color" type="text" class="validate" />
            <label for="color">Color</label>
          </div>



          <InputLabel id="demo-controlled-open-select-label">Fabric Options</InputLabel>
          <Select 
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={openFabrics}
            onClose={this.handleCloseForFabric}
            onOpen={this.handleOpenForFabric}
            onChange={this.handleInput}
            className="ItemUploadInputs"
            name="fabChoice"
            
          >
          {fabOptions}
          </Select>


          <InputLabel id="demo-controlled-open-select-label">Type Options</InputLabel>
          <Select 
            
            open={openTypes}
            onClose={this.handleCloseForType}
            onOpen={this.handleOpenForType}
            onChange={this.handleChange}
            className="ItemUploadInputs"
            name="typeChoice"
            
          >
          {typeOptions}
          </Select>


          {/* <select className="ItemUploadInputs" name='fabChoice' onChange={this.handleInput} required>
            {fabOptions}
          </select>

          <select className="ItemUploadInputs" name='typeChoice' onChange={this.handleInput} required>
            {typeOptions}
          </select> */}

          {/* <input id="ItemUploadButton" className="ItemUploadInputs" type='submit' value='upload' required/> */}
          <button id="ItemUploadButton" class="btn waves-effect waves-light" value="upload" type="submit" name="action" required>Submit
             <i class="material-icons right">add_circle</i>
         </button>

        </form>
      </div>
    )

  }
}

export default Item;