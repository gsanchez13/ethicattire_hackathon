import React from "react";
import Header from "./Header";
import "../About.css";

const About = () => {
    return(
        <div id="aboutContainer">
            {/* If logged in, then show <Header />, else, don't */}
            <Header />
            <h1> About </h1>
            <p>Welcome to Ethic Attire!</p>
        </div>
    );
}

export default About;