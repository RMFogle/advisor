import { makeStyles } from '@material-ui/core/styles';
// import { deepPurple } from '@material-ui/core/colors';

    export default makeStyles((theme) => ({
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
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
    },
    profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '400px',
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    smMargin: {
        margin: theme.spacing(1),
    },
    // purple: {
    //     color: theme.palette.getContrastText(deepPurple[500]),
    //     backgroundColor: deepPurple[500],
    // },
    [theme.breakpoints.down('sm')]: {
        appBar: {
        padding: '10px 20px',
        },
        heading: {
        display: 'none',
        },
        userName: {
        display: 'none',
        },
        image: {
        marginLeft: '5px',
        },
        toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '160px',
        },
    },

    actionDiv: {
        textAlign: 'center',
    },
    }));