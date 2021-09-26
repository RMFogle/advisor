import React from "react";
import { Grid } from '@material-ui/core';

import useStyles from './styles';

import TodoApps from "./TodoApps";
import TodoForm from "./TodoForm";

import Stack from '@mui/material/Stack';


const TodoAppCombo = () => {
    const classes = useStyles();

    return (
            <Grid className={classes.container} container alignItems="stretch" spacing={6}>
                <Grid item xs={12} sm={12} md={12}>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={4}
                    >
                    <TodoForm />
                    <TodoApps />
                </Stack>
                </Grid>
            </Grid>
            )
    }

    export default TodoAppCombo;