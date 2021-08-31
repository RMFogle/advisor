import React from 'react'; 
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Menu, MenuItem, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import useStyles from './styles';
import { useDispatch } from 'react-redux';

// import TaskForm from '../../Forms/TaskForm/TaskForm';
import { deleteTodo } from '../../../actions/todos';

const TodoApp = ({ check, taskId, setTaskId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [ajar, setAjar] = React.useState(false);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        };
        
        const handleClose = () => {
            setAnchorEl(null);
        };

        const handleClickOpenAlert = () => {
            setOpen(true);
            };
            
            const handleCloseAlert = () => {
                setOpen(false);
            };

            const handleClickOpenEdit = () => {
                setAjar(true);
                };
            
                const handleCloseEdit = () => {
                setAjar(false);
                };

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} />
            <div className={classes.overlay}>
            </div>

            <div className={classes.overlay2} name="edit">
                {/* <Button onClick={() => setCurrentId(post._id)} style={{ color: 'white' }} size="small">
                    <MoreHorizIcon fontSize="medium" />
                </Button> */}
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{ color: 'white' }} size="small">
                    <MoreHorizIcon fontSize="medium" />
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    onClick={handleClose}
                >
                    <MenuItem onClick={() => handleClickOpenEdit(setTaskId(check._id))}>Edit</MenuItem>
                    <Dialog open={ajar} onClose={handleCloseEdit} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Create A Break</DialogTitle>
                    <DialogContent>
                        {/* <TaskForm taskId={taskId} setTaskId={setTaskId}/> */}
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleCloseEdit} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleCloseEdit} color="primary">
                        Subscribe
                    </Button>
                    </DialogActions>
                </Dialog>
                    <MenuItem onClick={handleClickOpenAlert}>Delete</MenuItem>
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">{"Are You Sure You Want To Delete?"}</DialogTitle>
                                <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    WARNING: This action is permanent. It can not be undone.
                                </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                <Button onClick={handleCloseAlert} color="primary">
                                    Cancel
                                </Button>
                                <Button onClick={() => dispatch(deleteTodo(check._id))} color="primary" autoFocus>
                                    Delete
                                </Button>
                                </DialogActions>
                            </Dialog>
                </Menu>
            </div>
            <CardContent>
                <Typography className={classes.title} variant="body2" color="textSecondary" component="p">{check.task}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                {/* <Button size="small" color="primary" onClick={() => dispatch(deleteBreak(post._id))}>
                    <DeleteIcon fontSize="small" /> Delete
                </Button> */}
            </CardActions>
        </Card>
    ); 
}

export default TodoApp; 