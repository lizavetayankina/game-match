import React, { useEffect, useRef, useState } from 'react';
import "../styles/Timer.css";
import Game from './Game';

const Timer  = () => {
    const [timerHours, setTimer] = useState('00');
    const [timerMinuts, setMinuts] = useState('00');
   
return (
 <section className='timer-counter' > 
 <section  className='timer'>
<section> 
<p>{timerHours} <span>:</span></p>
</section>
  
 <section>
 <p>{timerMinuts} </p>
 </section>
 </section>
 </section>
)
}

export default Timer;