import React, { useState } from 'react';
import '../styles/Modal.css';


export default function Modal  (props) {

    let firstName = React.createRef();
    let lastName = React.createRef();
    let userEmail = React.createRef();

  
    
    function submit(e) {
    let nameUser = firstName.current.value;
    let surname = lastName.current.value;
    let email = userEmail.current.value;
    let userInfo = {nameUser, surname, email};
    console.log(userInfo); 

    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    }
        
   
        

 return (
        <div className={`modal_wrapper ${props.isOpened ? 'open' : 'close'}`} >
        <div className='modal_login'>
            <div className='modal_close'></div>
            <form>
            <label>First name</label>
            <input type='name' className='form-control firstName' required ref={firstName}/>
            <label>Last name</label>
            <input type='name' className='form-control lastName' required  ref={lastName}/>
            <label>Email</label>
            <input type='email' className='form-control' required ref={userEmail}/>
            <button className="btn" onClick={submit}>Submit </button>
            </form>
        </div>
        </div>
    );
 }