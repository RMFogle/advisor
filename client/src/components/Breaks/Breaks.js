import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Break from './Break/Break';
import useStyles from './styles';

const Breaks = ({ breakId, setBreakId }) => {
    const breaks = useSelector((state) => state.breaks)
    const classes = useStyles();

    console.log(breaks);

    return (
        !breaks.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {breaks?.map((posts) => (
                    <Grid key={posts._id} item xs={12} sm={12} md={6}>
                        <Break post={posts} breakId={breakId} setBreakId={setBreakId} />
                    </Grid>
                ))}
            </Grid>
        )
    ); 
}

export default Breaks; 