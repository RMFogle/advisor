import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Break from './Break/Break';
import useStyles from './styles';

//displays all the breaks to the main page. Perhaps this is redundent and all the breaks, habits and tasks need to just
//...be posted to the routines page. i.e. post-->posts. break/habit/task-->routines.
//..then user can move cards around as they see fit?

const Breaks = ({ setCurrentId }) => {
    const breaks = useSelector((state) => state.breaks)
    const classes = useStyles();

    console.log(breaks);

    return (
        !breaks.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {breaks?.map((post) => (
                    <Grid key={post._id} item xs={12} sm={12} md={6}>
                        <Break post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    ); 
}

export default Breaks; 