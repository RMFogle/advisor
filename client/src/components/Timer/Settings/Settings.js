import React from 'react'; 
import { useDispatch } from 'react-redux'
import { Button } from '@material-ui/core';
import useStyles from './styles';
import timerActions from '../../../actions/timerActions';

const Settings = ({ isStart }) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const btnClassName = isStart ? 'disable' : '';

    return (
        <div className={classes.settings}>
            <div className={classes.settingsSection}>
            <label id="session-label">Session Length</label>
            <div>
                <Button className={btnClassName} id="session-decrement" 
                onClick={() => 
                    dispatch(
                        timerActions.minusTime()
                        )}>-</Button>
                <span id="session-length">{}</span>
                <Button className={btnClassName} id="session-increment" 
                onClick={() => 
                    dispatch(
                        timerActions.addTime()
                        )}>+</Button>
            </div>
            </div>
        </div>
    );
}

export default Settings;