import React from "react";
import Header from "./Header";

const About = () => {
    return(
        <div>
            {/* If logged in, then show <Header />, else, don't */}
            <Header />
            <h1> About </h1>
            <p>Welcome to Ethic Attire!</p>
        </div>
    );
}

export default About;