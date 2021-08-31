import React, { useState, useEffect } from 'react'; 
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch } from 'react-redux';

import useStyles from './styles';

import { checkTask, deleteTodo } from '../../../actions/todos';

const List = ({ check }) => {
    const [checkData, setCheckData] = useState({ completed: '' });
    const classes = useStyles();
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(check) setCheckData(check);
    }, [check])

    return (
        <div className={classes.toDoStyle}>
            <span onClick={() => dispatch(checkTask(check._id))}>
                <Checkbox
                    type="submit"
                    checked={checkData.completed}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
            </span>
            <li className={classes.li}>
                {checkData.task}
            </li>
            <button onClick={() => dispatch(deleteTodo(check._id))}>x</button>
        </div>
    )
};

export default List;