import React from "react";
import Header from "./Header";

const Shops = () => {
    return(
        <div>
            {/* If logged in, then show <Header />, else, don't */}
            <Header />
            <div className="componentHeaderDiv">
                <h2 className="componentHeaderTag">Shops</h2>
            </div>
            <div id="myClosetContentDiv">
                <ul>
                    <li>Sustainable</li>
                    <li>Companies We Recommend</li>
                </ul>
            </div>
        </div>
    );
}

export default Shops;