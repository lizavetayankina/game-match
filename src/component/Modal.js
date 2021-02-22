import React, { useState } from 'react';
import '../styles/Modal.css';

const  Modal = props => {

    let firstName = React.createRef();
    let lastName = React.createRef();
    let userEmail = React.createRef();

    let users = [];


    function submit () { 
    let nameUser = firstName.current.value;
    let surname = lastName.current.value;
    let email = userEmail.current.value;
    let userInfo = {nameUser, surname, email} 
    users.push(userInfo);
    console.log(users);
    localStorage.setItem('usersGame', JSON.stringify(users));
 }

 return (
        <div className={`modal_wrapper ${props.isOpened ? 'open' : 'close'}`} >
        <div className='modal_login'>
            <div className='modal_close' onClick ={props.onModalClose}></div>
            <form>
            <label>First name</label>
            <input type='name' className='form-control firstName' required  ref={firstName}/>
            <label>Last name</label>
            <input type='name' className='form-control lastName' required   ref={lastName}/>
            <label>Email</label>
            <input type='email' className='form-control'  ref={userEmail}/>
            <button className="btn" onClick={submit}>Submit </button>
            <button className="btn" onClick={props.onModalClose}>x</button>
            </form>
        </div>
        </div>
    );
 }

 export default Modal;