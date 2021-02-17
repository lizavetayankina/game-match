import React from 'react';
 import '../styles/HeaderGame.css';
 import Home from './Home';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


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
                <a href="Home" className="navGame-link link">Home</a>
                </div>
                
                <Router>
                    <Switch>
                        <Route exact path="/Home" component={Home} />
                        </Switch>
                        </Router> 
        </div>
    )
}