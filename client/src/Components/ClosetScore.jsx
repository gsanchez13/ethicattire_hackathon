import React from 'react';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import '../css-files/ClosetScore.css';


const ClosetScore = (props) => {
    let currentItems = props.susItems;
    let totalItems = props.totalItems
    let percentage = (currentItems / totalItems) * 100;
    return (
        <example label="Default" >
            <CircularProgressbar className='score' value={percentage} text={`${currentItems}/${totalItems}`} />
        </example>
    ) 
}
export default ClosetScore;