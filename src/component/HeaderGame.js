/*import React, { useState } from 'react';
import '../styles/HeaderGame.css';
import ContentGame from './ContentGame';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export default function HeaderGame () {
    const [options, setOptions] = useState(null);
    const [highScore] = useState(0);

    

    return (
        <div className='navGame'>
            <div className='navGame-title'> 
                <h1>Match-Match Game</h1>
    </div>
            <div className='navGame-menu'>
                <span className="navGame-link score">Score:{highScore} </span>
                <button className='btnGame' onClick={() => setOptions(12)}>Easy</ button>
                <button className='btnGame' onClick={() => setOptions(18)}>Media</button>
                <button className='btnGame'onClick={() => setOptions(24)}>Hard</button>

                <a href="Home" className="navGame-link link">Home</a>
                </div> 
        </div>
        
    )
}*/