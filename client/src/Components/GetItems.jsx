import React from "react";


const GetItems = (props) => {
    {console.log("props:", props)}
    return(
        <div>
            {props.data}
        </div>
    );
}

export default GetItems;