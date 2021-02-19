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
<a href="#" className="nav-link"  onClick={() => setModal({...modal,modal1:true})} >Log in </a>
</div>

<Modal isOpened={modal.modal1} 
onModalClose={() => setModal({...modal, modal1:false})} />


</div>
);
}


