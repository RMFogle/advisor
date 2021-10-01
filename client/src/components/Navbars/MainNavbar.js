import React from 'react'; 
import { AppBar, Toolbar } from '@material-ui/core';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';

import advisorLogo from '../../img/Advisor-logoblue-25.png';
import useStyles from './styles';


const ScrollTop = (props) => {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
        });
    
        const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#back-to-top-anchor',
        );
    
        if (anchor) {
            anchor.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            });
        }
        };
    
        return (
        <Zoom in={trigger}>
            <Box
            onClick={handleClick}
            role="presentation"
            sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
            {children}
            </Box>
        </Zoom>
        );
    }

const MainNavbar = (props) => {
    const classes = useStyles();


    return (
        <AppBar className={classes.appMainBar} position="static" color="inherit">
                <Toolbar className={classes.toolbar} id="back-to-top-anchor">
                    <img src={advisorLogo} className={classes.logo} alt="advisorLogo" />
                </Toolbar>
                <ScrollTop {...props}>
                    <Fab color="primary" size="large" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon />
                    </Fab>
                </ScrollTop>
        </AppBar>
    );
};

export default MainNavbar;