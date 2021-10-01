import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    times: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        },
        timesContent: {
            margin: '0 auto',
            width: '120px',
            height: '45px',
            display: 'inline-flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            border: '3px solid #e0e0e0',
            borderRadius: '5%',
        },
        timerLabel: {
            fontSize: '1.1rem',
            fontWeight: '500',
            margin: '5px',
        },
        timeLeft: {
            fontSize: '1.1rem',
            fontWeight: '700',
            margin: '10px',
        },
        controls: {
            display: 'flex',
            justifyContent: 'center',
        }, 
        controlButton: {
            cursor: 'pointer',
            backgroundColor: 'none',
        },
        root: {
            width: '100%',
            '& > * + *': {
                marginTop: theme.spacing(2),
            },
        },
}));