import React, { useState, useEffect } from 'react'; 
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Menu, MenuItem, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Switch, FormGroup, FormControlLabel, FormControl, InputLabel, Select, Paper, TextField } from '@material-ui/core';
import LinkIcon from '@mui/icons-material/Link';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { deleteAgenda } from '../../../actions/agendas';
import { updateAgenda } from '../../../actions/agendas';


const Agenda = ({ post, agendaId, setAgendaId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [ajar, setAjar] = React.useState(false);
    const [checked, setChecked] = React.useState(false);
    const [postData, setPostData] = useState({ title: '', message: '', notes: '', downloadURL: '', cardImage: '' });
    const posts = useSelector((state) => agendaId ? state.agendas.find((p) => p._id === agendaId) : null); 

    useEffect(() => {
        if(posts)
        setPostData(posts);
    }, [posts])


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateAgenda(agendaId, postData));
        clear();
    }

    const clear = () => {
        setPostData({ title: '', message: '', notes: '', downloadURL: '', cardImage: '' })
    }

    const toggleChecked = () => {
        setChecked((prev) => !prev);
    };

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
        <Card className={classes.card} style={{backgroundColor: checked ? "grey" : ""}}>
            <CardMedia className={classes.media} image={post.cardImage || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
            <div className={classes.overlay} name="edit">
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{ color: 'white' }} size="small">
                    <MoreHorizIcon fontSize="large" />
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    onClick={handleClose}
                >
                    <MenuItem onClick={() => handleClickOpenEdit(setAgendaId(post._id))}>Edit</MenuItem>
                    <Dialog open={ajar} onClose={handleCloseEdit} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title"></DialogTitle>

                    <DialogContent>               
                        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">{ agendaId ? 'Edit' : 'Create' } a Card</Typography>
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
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" onClick={handleCloseEdit} fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
                </DialogContent>
                    <DialogActions>
                    <Button onClick={handleCloseEdit} color="primary">
                        Cancel
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
                                <Button onClick={() => dispatch(deleteAgenda(post._id))} color="primary" autoFocus>
                                    Delete
                                </Button>
                                </DialogActions>
                            </Dialog>
                </Menu>
            </div>
            <CardContent>
                <Typography className={classes.title} variant="h6">{post.title}</Typography>
                <Typography className={classes.message} variant="body1" color="textSecondary" component="p">{post.message}</Typography>
                <Typography className={classes.title} variant="body2" color="textSecondary" component="p">{post.notes}</Typography>
                <Button className={classes.buttonLink}>
                    <LinkIcon color="primary"/>
                <a href={post.downloadURL} target="_blank" rel="noreferrer">
                <Typography className={classes.link} variant="body2" color="textSecondary" component="p">{post.downloadURL}</Typography>
                </a>
                </Button>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <FormGroup>
                    <FormControlLabel
                        control={<Switch checked={checked} onChange={toggleChecked} />}
                        label={ checked ? 'Complete' : 'Incomplete'}
                    />
                </FormGroup>
                <Typography className={classes.updatedAt} variant="caption">updated {moment(post.updatedAt).fromNow()}</Typography>
            </CardActions>
        </Card>
    ); 
}

export default Agenda; 