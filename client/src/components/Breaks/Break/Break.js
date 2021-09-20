import React from 'react'; 
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Menu, MenuItem, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Switch, FormGroup, FormControlLabel } from '@material-ui/core';
import LinkIcon from '@mui/icons-material/Link';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';

import useStyles from './styles';
import { useDispatch } from 'react-redux';

import BreakForm from '../../Forms/BreakForm/BreakForm'
import { deleteBreak } from '../../../actions/breaks';


const Break = ({ post, breakId, setBreakId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [ajar, setAjar] = React.useState(false);
    const [checked, setChecked] = React.useState(false);

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

                console.log(checked)
    
    //Break Component
    return (
        <Card className={classes.card} style={{backgroundColor: checked ? "grey" : ""}}>
            <CardMedia className={classes.media} image={post.cardImage} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h5">{post.title}</Typography>
                <Typography variant="body2">updated {moment(post.updatedAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2} name="edit">
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
                    <MenuItem onClick={() => handleClickOpenEdit(setBreakId(post._id))}>Edit</MenuItem>
                    <Dialog open={ajar} onClose={handleCloseEdit} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title"></DialogTitle>
                    <DialogContent>
                        <BreakForm breakId={breakId} setBreakId={setBreakId} />
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
                                <Button onClick={() => dispatch(deleteBreak(post._id))} color="primary" autoFocus>
                                    Delete
                                </Button>
                                </DialogActions>
                            </Dialog>
                </Menu>
            </div>
            <CardContent>
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
            </CardActions>
        </Card>
    ); 
}

export default Break; 