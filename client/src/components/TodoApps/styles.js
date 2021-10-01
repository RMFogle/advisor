import { makeStyles } from '@material-ui/core/styles';

    export default makeStyles(() => ({
    mainContainer: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',
    },
    taskcard: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        width: '100%',
        padding: '5px',
    },
    tasklist: {
        display: 'flex',
    },
    h2: {
        textAlign: 'center',
    },
    paper: {
        boxShadow: 'none',
    },
    inputTask: {
        display: 'flex',
        justifyContent: 'center',
        margin: '2px',
        padding: '2px',
    },
    taskButtons: {
        display: 'flex',
        justifyContent: 'space-evenly',
        margin: '5px',
        padding: '5px',
    },
    }));