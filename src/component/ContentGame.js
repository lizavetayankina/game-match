import React from 'react';
import  "../styles/Content.css"
import Board from './Board';

export default function ContentGame () {
 return (
    <div className='contentGame'>           
    <div className="rules">
    <Board />
    </div>
    </div>
    )
}