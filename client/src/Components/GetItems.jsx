import React from "react";
import Header from "./Header";

const GetItems = (props) => {
    {console.log("props:", props)}
    return(
        <div>
            {props.data}
        </div>
    );
}

export default GetItems;