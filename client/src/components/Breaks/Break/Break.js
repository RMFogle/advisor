import React from 'react'; 
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';


import useStyles from './styles';

//Add javascript timmer 
//Add label and text field on what to go do for your break or make it a drop down selection.
//Form for create a break should be a pop-up modal along a sub-nav bar. "+break" button. 
//...which pops up a modal form to create the break card. Once submitted it goes to the page has a break card.
//Add url image link to <CardMedia pass in as a value link={post.url} or something like that.

const Break = ({ post }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.title}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button onClick={() => {}} style={{ color: 'white' }} size="small">
                    {/* <MoreHorizIcon fontSize="medium" /> */}
                </Button>
            </div>
            <CardContent>
                <Typography className={classes.title} variant="body2" color="textSecondary" component="p" gutterBottom>{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => {}}>
                    <DeleteIcon fontSize="small" /> &nbsp; Delete
                </Button>
            </CardActions>
        </Card>
    ); 
}

export default Break; 