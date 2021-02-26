/*import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import styles from "../styles/Timer.css";
import converterTime from './converterTime.js';

function Timers({ time, startTimers, stopTimers }) {
    useEffect(
        () => {
            startTimers();
            return stopTimers;
        }, [startTimers, stopTimers],
    );

    const minutes = Math.floor(time / 60);

    const renderTimeIsUp = () => {
    stopTimers();
    return <div className={styles.timeIsUp}>time over</div>;
    };

    return (
        <div className={styles.timer}>
            {minutes >= 60 ? 
            renderTimeIsUp() 
            : converterTime(time)
            }
        </div>
    );
}

Timers.propTypes = {
    time: propTypes.number.isRequired,
    startTimer: propTypes.func.isRequired,
    stopTimer: propTypes.func.isRequired,
};

export default Timers;*/