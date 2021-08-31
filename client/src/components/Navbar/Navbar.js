import React, { useState, useEffect } from 'react'; 
import { AppBar, Typography, Toolbar, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, Select, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import useStyles from './styles';

import { createBreak } from '../../actions/breaks';
import { createTodo } from '../../actions/todos';


const Navbar = ({ breakId, setBreakId, taskId, setTaskId }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [postData, setPostData] = useState({ title: '', message: '', notes: '', downloadURL: '' });
    const post = useSelector((state) => breakId ? state.breaks.find((p) => p._id === breakId) : null); 
    const [checkData, setCheckData] = useState({ task: '' });
    const check = useSelector((state) => taskId ? state.todos.find((p) => p._id === taskId) : null); 

    useEffect(() => {
        if(post)
        setPostData(post);
    }, [post])


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createBreak(postData));
        clear();
    }

    const clear = () => {
        setPostData({ title: '', message: '', notes: '', downloadURL: '' })
    }

    useEffect(() => {
        if(check) setCheckData(check);
    }, [check])

    const handleSubmitTask = (e) => {
        e.preventDefault();
        dispatch(createTodo(checkData));
        clearTask();
    }

    const clearTask = () => {
        setCheckData({ task: '' })
    }

    const [open, setOpen] = React.useState(false);
    const [ajar, setAjar] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        };
    
        const handleClose = () => {
        setOpen(false);
        };

        const handleClickAjar = () => {
            setAjar(true);
            };
        
            const handleShut = () => {
            setAjar(false);
            };

    


    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography className={classes.heading} variant="h4" align="center">advisor App</Typography>

        {/* <Link to="/" className={classes.brandContainer}>
            <img component={Link} to="/" src={""} alt="icon" height="45px" />
            <img className={classes.image} src={""} alt="icon" height="40px" />
        </Link> */}
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                +Break
            </Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Create A Break</DialogTitle>
                    <DialogContent>
                    <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">{ breakId ? 'Edit' : 'Create' } a Card</Typography>
            <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="outlined-age-native-simple">Title</InputLabel>
                        <Select
                        native
                        value={postData.title}
                        onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                        label="Title"
                        inputProps={{
                            name: 'title',
                            id: 'outlined-title-native-simple',
                        }}
                        >
                        <option aria-label="None" value="" />
                        <option value={"Routine"}>Routine</option>
                        <option value={"Habit"}>Habit</option>
                        <option value={"Tasks"}>Tasks</option>
                        <option value={"Break"}>Break</option>
                        </Select>
                    </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="outlined-age-native-simple">Message</InputLabel>
                        <Select
                        native
                        value={postData.message}
                        onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                        label="Message"
                        inputProps={{
                            name: 'message',
                            id: 'outlined-message-native-simple',
                        }}
                        >
                        <option aria-label="None" value="" />
                        <option value={"Keep Going!"}>Keep Going!</option>
                        <option value={"You Got This!"}>You Got This!</option>
                        <option value={"Stay Focused!"}>Stay Focused!</option>
                        <option value={"Be Patient"}>Be Patient</option>
                        <option value={"You Deserve To Relax"}>You Deserve To Relax</option>
                        <option value={"Let Your Mind Wander"}>Let Your Mind Wander</option>
                        </Select>
                    </FormControl>
            <TextField name="notes" variant="outlined" label="Notes" fullWidth value={postData.notes} onChange={(e) => setPostData({ ...postData, notes: e.target.value })}/>
            <TextField type="url" name="url" variant="outlined" label="uRL (optional)" fullWidth value={postData.downloadURL} onChange={(e) => setPostData({ ...postData, downloadURL: e.target.value })}/>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" onClick={handleClose} fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Subscribe
                    </Button>
                    </DialogActions>
                </Dialog>
            <Button variant="outlined" color="primary" onClick={handleClickAjar}>
                +Task
            </Button>
                <Dialog open={ajar} onClose={handleShut} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Create A Task</DialogTitle>
                    <DialogContent>
                        <Paper className={classes.paper}>
                            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmitTask}>
                            <Typography variant="h6">{ taskId ? 'Editing' : 'Creating' } a Task</Typography>
                            <TextField name="task" variant="outlined" label="Task" fullWidth value={checkData.task} onChange={(e) => setCheckData({ ...checkData, task: e.target.value })}/>
                            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                            <Button variant="contained" color="secondary" size="small" onClick={clearTask} fullWidth>Clear</Button>
                            </form>
                        </Paper>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleShut} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleShut} color="primary">
                        Subscribe
                    </Button>
                    </DialogActions>
                </Dialog>
        <Toolbar className={classes.toolbar}>
            {/* {user?.result ? (
            <div className={classes.profile}>
                {/* <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar> */}
                {/* <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography> */}
                {/* <Button variant="contained" className={classes.logout} color="secondary" onClick={""}>Logout</Button>
            </div>
            ) : (
            <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
            )} */}
        </Toolbar>
        </AppBar>
    );
};

export default Navbar;