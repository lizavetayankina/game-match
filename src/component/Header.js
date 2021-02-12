import React, { useState } from 'react';

import Content from './Content';
import Modal from './Modal';
import Board from './Board';
import '../styles/Header.css';


export default function Header () {

const [modal, setModal] = useState({modal1:false}) 
const [board, setBoard] = useState({board:false})

return (
<div className="nav">
<div className="nav-title">
  <h1>Match-Match Game</h1>
</div>
<div className="nav-menu">  
<a href="#" className="nav-link" onClick >Home</a>
<a href="#" className="nav-link" onClick>Game</a>
<a href="#" className="nav-link" onClick={() => setModal({...modal,modal1:true})} >Log in </a>
</div>


<Modal isOpened={modal.modal1} 
onModalClose={() => setModal({...modal, modal1:false})} />

</div>

);
}


