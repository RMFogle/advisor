import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTimer } from '../../actions/timers';
import './TimerView.css';

const TimerView = (props) => {
    const { index, timer } = props
    const dispatch = useDispatch() 

    return (
    <div className="TimerView">
        <h2>{timer.name}</h2>
        <h1>{timer.time}</h1>
        <button 
            onClick={() => dispatch(toggleTimer(index))}
        >
            {timer.isRunning ? "Stop" : "Start"}
        </button>
    </div>
    );
}

export default TimerView;