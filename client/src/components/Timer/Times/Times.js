import React, { useRef, useState, useEffect } from 'react'; 
import { useSelector } from 'react-redux';
import { Button, Snackbar, IconButton, Paper, Divider } from '@material-ui/core';
import AlarmIcon from '@mui/icons-material/Alarm';
import Stack from '@mui/material/Stack';
import CloseIcon from '@material-ui/icons/Close';
import alarm1 from '../../../audio/alarm.mp3';
import alarm2 from '../../../audio/alarm.ogg';
import useStyles from './styles'; 
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const Times = () => {
    const classes = useStyles();
    const timeLeft = useSelector((state) => state.timeLeft);
    const [num, setNum] = useState(null);
    const [pause, setPause] = useState(false);
    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
            }
        
            setOpen(false);
        };

    let intervalRef = useRef();

    const decreaseNum = () => setNum((prev) => prev - 1);

    useEffect(() => {
            if(num+timeLeft===0){
            console.log("TIME LEFT IS 0");
            clearInterval(intervalRef.current)
            playAudio()
            alert("Times Up!")
            setOpen(true)
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
            <Stack
            direction={{ xs: 'column', sm: 'row' }}
            divider={<Divider orientation="vertical" flexItem />}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            >
                <Item className={classes.times}>
                    <div className={classes.timesContent}>
                    <AlarmIcon fontSize="medium" />
                    <span className={classes.timeLeft}>{formatTime(timeLeft + num)}</span>
                    </div>
                </Item>
                <Item className={classes.controls}>
                    <Button className={classes.controlButton} onClick={handleClick}>{pause ? "Pause" : "Run"}</Button>
                    <Button className={classes.controlButton} onClick={onReset}>Reset</Button>
                </Item>
            </Stack>
            <audio className="audio-element">
                <source src={alarm1} type="audio/mpeg"></source>
                <source src={alarm2} type="audio/ogg"></source>
            </audio>
            <div>
                <Snackbar
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message="Times Up!"
                    action={
                    <React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                        <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                    }
                />
            </div>
            </div>
        )
}

export default Times;