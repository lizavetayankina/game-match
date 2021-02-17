import React, { useState } from 'react';
import '../styles/Modal.css';


const Modal = props => {

let userInfo = [];
let firstName = React.createRef();
let lastName = React.createRef();

    function f1() {
    console.log ('ggggg');
    }
    
    function showInput(event) {
        const first = firstName.current.value;
        console.log(first);
        const last = lastName.current.value;
        console.log(last);

        let inpOneRest = {first: first,
        inp: 1}
        let inpTwoRest = { last: last, 
        inp: 2}
        userInfo.push(inpOneRest);
        userInfo.push(inpTwoRest);
        console.log(userInfo);
    }

 

    return (
        <div className={`modal_wrapper ${props.isOpened ? 'open' : 'close'}`} >
        <div className='modal_login'>
            <div className='modal_close' onClick={props.onModalClose}></div>
            <form>
            <label>First name</label>
            <input type='name' className='form-control firstName' onInput={showInput} ref={firstName}/>
            <label>Last name</label>
            <input type='name' className='form-control lastName'onInput={showInput} ref={lastName}/>
            <label>Email</label>
            <input type='email' className='form-control'/>
            <button className="btn" onClick={f1}>Submit </button>
            <button className="btn" onClick={props.onModalClose}>x</button>
            </form>
        </div>
        </div>
    );
}

export default Modal;