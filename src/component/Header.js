import React, { useState } from 'react';
import '../styles/Header.css';
import Modal from './Modal';
import Game from './Game';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export default function Header () {

const [modal, setModal] = useState({modal1:false}) 

return (
<div className="nav">
<div className="nav-title">
  <h1>Match-Match Game</h1>
</div>
<div className="nav-menu">  
<a href="Home" className="nav-link">Home</a>
<a href="Game" className="nav-link">Game</a>
<a href="#" className="nav-link" onClick={() => setModal({...modal,modal1:true})} >Log in </a>
</div>

<Modal isOpened={modal.modal1} 
onModalClose={() => setModal({...modal, modal1:false})} />
<Router>
  <Switch>
    <Route exact path="/Game" component={Game} />
    <Route exact path="/Home" component={Home} />
  </Switch>
</Router> 
</div>
);
}


