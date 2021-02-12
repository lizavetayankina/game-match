import React from 'react';
 import '../styles/HeaderGame.css';


export default function HeaderGame () {
    return (
        <div className='navGame'>
            <div className='navGame-title'> 
                <h1>Match-Match Game</h1>
            </div>
            <div className='navGame-menu'>
                <span className="navGame-link score">Score: </span>
                <button className='btnGame'>Easy</ button>
                <button className='btnGame'>Media</button>
                <button className='btnGame'>Hard</button>
                <a href="#" className="navGame-link link" onClick >Home</a>
               
                    
                
                </div>
        </div>
    )
}