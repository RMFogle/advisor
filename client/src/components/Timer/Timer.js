import React from 'react';
import Settings from './Settings/Settings';
import Times from './Times/Times';
// import useStyles from './styles';

const Timer =() => {

    return (
        <div className="timer-clock"> 
            <div className="timer-clock-header">
            <h1 className="timer-clock-header-name">Timer Clock</h1>
            </div>
            <Settings
            />
            <Times
            />
            <footer></footer>
        </div>
    );
}

export default Timer;