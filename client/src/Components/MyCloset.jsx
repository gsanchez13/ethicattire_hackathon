import React from "react";
import Header from "./Header";

const MyCloset = () => {
    return(
        <div>
            <Header />
            <div className="componentHeaderDiv">
                <h2 className="componentHeaderTag">Clothing Checklist</h2>
            </div>
            <div id="myClosetContentDiv">
                Content
            </div>
        </div>
    );
}

export default MyCloset;