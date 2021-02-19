import React from 'react';
import  "../styles/Content.css"

export default function Content () {
    return (
        <div className='welcome'>
            <h1>Hello player! It's great game for you</h1>
            <div className="rules">
            <h2> Rules the Game </h2>
            <ul>
            <li key='1'>You must to login this game </li>
            <li key='2'>You nees choose level</li>
            <li key='3'>You need match similar pictures on bord. </li>
            </ul>
            </div>
            </div>
    )
}