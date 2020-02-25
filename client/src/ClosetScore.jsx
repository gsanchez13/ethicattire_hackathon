// import React from 'react';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ClosetScore = (props) => {
    let currentItems = 16;
    let totalItems = 32
    let percentage = (currentItems / totalItems) * 100;
    return (
        <CircularProgressbar value={percentage} text={`${currentItems}/${totalItems}`} />
    )
}
export default ClosetScore;