import React, { useState } from 'react';
import Board from './Board';
import  "../styles/Game.css"
import Timer from './Timer';
//import TimerConteiner from './TimerConteiner';
//import { Provider } from 'react-redux';

export default function Game () {
    const [options, setOptions] = useState(null);
    return ( //<Provider>
    <div className='game'>
     <div className='navGame-menu'>
          <Timer />  
            <button className='btnGame' onClick={() => setOptions(12)}>Easy</ button>
            <button className='btnGame' onClick={() => setOptions(18)}>Media</button>
            <button className='btnGame'onClick={() => setOptions(24)}>Hard</button>
    </div>
    <div className='contGame'> 
    
    <Board />
     </div> 
    </div>
    //</Provider>
    )
}