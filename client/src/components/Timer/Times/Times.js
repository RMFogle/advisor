import React, { useRef, useState, useEffect } from 'react'; 
import { useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import alarm1 from '../../../audio/alarm.mp3';
import alarm2 from '../../../audio/alarm.ogg';
import useStyles from './styles'; 


const Times = () => {
    const classes = useStyles();
    const timeLabel = useState('Session');
    const timeLeft = useSelector((state) => state.timeLeft);
    const [num, setNum] = useState(null);
    const [pause, setPause] = useState(false);

    let intervalRef = useRef();

    const decreaseNum = () => setNum((prev) => prev - 1);

    useEffect(() => {
            if(num+timeLeft===0){
            console.log("TIME LEFT IS 0");
            clearInterval(intervalRef.current)
            playAudio()
            alert("Times Up!")
            stopAudio()
            onReset()
            setPause((prev) => !prev)
            }

            if (!num+timeLeft) return;

            intervalRef.current = setInterval(decreaseNum, 1000);        
        
            return () => clearInterval(intervalRef.current);

        }, [num, timeLeft]);


    const handleClick = () => {
            if (!pause) {
            intervalRef.current = setInterval(decreaseNum, 1000);
            } else  {
            clearInterval(intervalRef.current);
            }
            setPause((prev) => !prev);
        };

    const onReset = () => {
        setNum(1 - 1)
    };

    const formatTime = (num) => {
        let minute = Math.floor(num / 60);
        if (minute < 10) minute = '0' + minute;
    
        let second = num - 60 * minute;
        if (second < 10) second = '0' + second;
    
        return `${minute}:${second}`;
        };
    
    const playAudio = () => {
        const audio = document.getElementsByClassName("audio-element")[0]
        audio.play()
    };

    const stopAudio = () => {
        const audio = document.getElementsByClassName("audio-element")[0]
        audio.pause()
    };

    console.log(timeLeft+num)

    return (
        <div>
            <div className={classes.times}>
                    <div className={classes.timesContent}>
                    <label className={classes.timerLabel}>{timeLabel}</label>
                    <span className={classes.timeLeft}>{formatTime(timeLeft + num)}</span>
                    </div>
            </div>
            <div className={classes.controls}>
                    <Button className={classes.controlButton} onClick={handleClick}>{pause ? "Pause" : "Run"}</Button>
                    <Button className={classes.controlButton} onClick={onReset}>Reset</Button>
            </div>
            <audio className="audio-element">
                <source src={alarm1} type="audio/mpeg"></source>
                <source src={alarm2} type="audio/ogg"></source>
            </audio>
        </div>
        )
}

export default Times;