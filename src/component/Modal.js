import React, { useState } from 'react';
import '../styles/Modal.css';


const Modal = props => {

    return (
        <div className={`modal_wrapper ${props.isOpened ? 'open' : 'close'}`} >
        <div className='modal_login'>
            <div className='modal_close' onClick={props.onModalClose}></div>
            <form>
            <label>First name</label>
            <input type='name' className='form-control'  value
            ></input>
            <label>Last name</label>
            <input type='name' className='form-control'  value></input>
            <label>Email</label>
            <input type='email' className='form-control'></input>
            <button className="btn" onClick> Submit </button>
            <button className="btn" onClick={props.onModalClose}>x</button>
            </form>
        </div>
        </div>
    );
}

export default Modal;