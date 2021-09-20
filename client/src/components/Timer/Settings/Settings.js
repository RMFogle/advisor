import React from 'react'; 
import { useDispatch } from 'react-redux'
import { IconButton } from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import useStyles from './styles';
import timerActions from '../../../actions/timerActions';


const Settings = ({ isStart }) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const btnClassName = isStart ? 'disable' : '';

    return (
        <div className={classes.settings}>
            <div className={classes.settings}>
                <IconButton className={btnClassName} id="session-decrement" 
                onClick={() => 
                    dispatch(
                        timerActions.minusTime()
                        )}>
                            <RemoveIcon fontSize="small" />
                        </IconButton>
                        </div>
            <div className={classes.settings}>
                <IconButton className={btnClassName} id="session-increment" 
                onClick={() => 
                    dispatch(
                        timerActions.addTime()
                        )}>
                            <AddIcon fontSize="small"/>
                        </IconButton>
                        </div>
        </div>
    );
}

export default Settings;