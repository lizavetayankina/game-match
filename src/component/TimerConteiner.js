/*import React, { useRef, useCallback  } from 'react';
import {useSelector, useDispatch } from 'react-redux'; 
import Timers from './Timers'; 
import { clearTime, setTime } from './timerActions';

function TimerConteiner() {
    const dispatch = useDispatch();
    const time = useSelector((state) => state.timerReducer.time);
    const timerId = useRef(null);


    const startTimers = useCallback(() => {
        timerId.current = setInterval(()=> {
            dispatch(setTime());
        },1000);
    },[dispatch]);

    const stopTimers = useCallback(() =>{
        dispatch(clearTime());
        clearInterval(timerId.current);
    },[dispatch]);

    return (
        <Timers time={time} startTimers={startTimers} stopTimers={stopTimers} />
    );
}

export default React.memo(TimerConteiner);*/