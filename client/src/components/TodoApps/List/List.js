import React, { useState, useEffect } from 'react'; 
import { Checkbox, List } from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { checkTask, deleteTodo } from '../../../actions/todos';

const ListItemCustom = ({ check }) => {
    const [checkData, setCheckData] = useState({ completed: '' });
    const classes = useStyles();
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(check) setCheckData(check);
    }, [check])

    return (
        <Stack 
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        >
        <div className={classes.toDoStyle}>
            <span onClick={() => dispatch(checkTask(check._id))}>
                <Checkbox
                    type="submit"
                    checked={checkData.completed}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
            </span>
                <List className={classes.li}>
                    {checkData.task}
                </List>
            </div>
            <div className={classes.delButton}>
            <IconButton aria-label="delete" onClick={() => dispatch(deleteTodo(check._id))}>
                <DeleteIcon />
            </IconButton>
            </div>
        </Stack>
    )
};

export default ListItemCustom;