import React, { useState } from 'react';
import '../styles/HeaderGame.css';


export default function HeaderGame () {
    const [options, setOptions] = useState(null);
    const [highScore, setHighScore] = useState(0)
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
}