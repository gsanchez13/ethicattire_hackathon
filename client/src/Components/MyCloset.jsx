import React from "react";
import Header from "./Header";
import axios from "axios";
import GetItems from "./GetItems";

class MyCloset extends React.Component {
    constructor() {
        super();
        this.state = {
            user: '1',
            data: []
        }
    }

    async componentDidMount() {
        // await this.getAllItems()
    console.log(this.state.data)

             try {
            let clothes = await axios.get(`http://localhost:3000/items/`);
            console.log("clothes:", clothes);
            console.log(clothes.data.payload)
            let newData = [...this.state.data];
            console.log("newData:", newData);
            clothes.data.payload.map(element => {
                newData.push(element)
            });
            this.setState({
                data: newData
            });

        } catch (err) {
            console.log("ERROR:", err);
        }
    }
    getAllItems = async () => {
        // try {
        //     let clothes = await axios.get(`http://localhost:3000/items/`);
        //     console.log("clothes:", clothes);
        //     console.log(clothes.data.payload)
        //     let newData = [...this.state.data];
        //     console.log("newData:", newData);
        //     clothes.data.payload.map(element => {
        //         newData.push(element)
        //     });
        //     this.setState({
        //         data: newData
        //     });

        // } catch (err) {
        //     console.log("ERROR:", err);
        // }
    }

    render() {
        // const { user, data } = this.state;
        return (
            <div>
                <Header />
                <div className="componentHeaderDiv">
                    <h2 className="componentHeaderTag">Clothing Checklist</h2>
                </div>
                <div id="myClosetContentDiv">
                {this.state.data ? (<GetItems data={this.state.data} />) : null}
                    
                </div>
            </div>
        );
    }
}
export default MyCloset;
