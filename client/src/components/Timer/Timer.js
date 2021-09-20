import React from 'react';
import { Grid, Paper, Divider } from '@material-ui/core';
import Stack from '@mui/material/Stack';
import Settings from './Settings/Settings';
import Times from './Times/Times';
import useStyles from './styles';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const Timer =() => {
    const classes = useStyles();


    return (
        // <Grid className={classes.container} 
        // container
        // direction="row"
        // justifyContent="center"
        // alignItems="center"
        // spacing={1}>
        <div>
            <Stack
            direction={{ xs: 'column', sm: 'row' }}
            divider={<Divider orientation="vertical" flexItem />}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            >
                <Item>
                    <Settings
                    />
                </Item>
                    <Times
                    />
            </Stack>
        </div>
        // </Grid>
    );
}

export default Timer;