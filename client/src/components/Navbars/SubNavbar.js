import React, { useState, useEffect } from 'react'; 
import { AppBar, Typography, Toolbar, Button, TextField, Dialog, DialogActions, DialogContent, FormControl, InputLabel, Select, Paper, Divider } from '@material-ui/core';
import Stack from '@mui/material/Stack';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import useStyles from './styles';
import { styled } from '@mui/material/styles';

import { createBreak } from '../../actions/breaks';
import Timer from '../Timer/Timer';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const SubNavbar = ({ breakId, setBreakId }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [postData, setPostData] = useState({ title: '', message: '', notes: '', downloadURL: '', cardImage: '' });
    const post = useSelector((state) => breakId ? state.breaks.find((p) => p._id === breakId) : null); 

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
        setPostData({ title: '', message: '', notes: '', downloadURL: '', cardImage: '' })
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        };
    
        const handleClose = () => {
        setOpen(false);
        };


    return (
        <AppBar className={classes.appSubBar} position="relative" color="inherit">
            <Toolbar className={classes.toolbar}>
            <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            >
            <Item className={classes.cardButton}>
            <Button variant="contained" color="default" onClick={handleClickOpen}>
                +Card
            </Button>
            </Item>
            <Divider orientation="vertical" flexItem />
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
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
            <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, cardImage: base64 })} /></div>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" onClick={handleClose} fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    </DialogActions>
                    </Dialog>
                    <Timer />
                </Stack>
        </Toolbar>
        </AppBar>
    );
};

export default SubNavbar;