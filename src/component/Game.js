import React, { useState } from 'react';
import Board from './Board';
import  "../styles/Game.css"

export default function Game () {
    const [options, setOptions] = useState(null);
    return ( 
    <div className='game'>
     <div className='navGame-menu'>
            <button className='btnGame' onClick={() => setOptions(12)}>Easy</ button>
            <button className='btnGame' onClick={() => setOptions(18)}>Media</button>
            <button className='btnGame'onClick={() => setOptions(24)}>Hard</button>
    </div>
    <div className='contGame'>  
    <Board />
     </div> 
    </div>
    )
}