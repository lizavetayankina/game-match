import React, { useState } from 'react';
import '../styles/Header.css';
import Modal from './Modal';

export default function Header () {

const [modal, setModal] = useState({modal1:false}) 

return (
<div className="nav">
<div className="nav-title">
  <h1>Match-Match Game</h1>
</div>
<div className="nav-menu">  
<a href="Home" className="nav-link" >Home</a>
<a href="Game" className="nav-link" >Game</a>

</div>

<Modal isOpened={() => setModal({...modal,modal1: true})} 
onModalClose={() => setModal({...modal, modal1:false})} />
</div>
);
}


