import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    media: {
        height: 0,
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '10px',
        height: '100%',
        width: '100%',
        position: 'relative',
        backgroundColor: 'white',
    },
    overlay: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        color: 'white',
    },
    message: {
        padding: '0 16px',
        fontWeight: 'bold',
        margin: '5px',
    },
    title: {
        padding: '0 16px',
        margin: '5px',
        fontWeightLight: 200,
    },
    buttonLink: {
        display: 'flex',
        padding: '5px',
        marginTop: '15px',
        borderColor: 'blue',
    },
    link: {
        display: 'flex',
        justifyContent: 'center',
        border: '2px',
        borderColor: 'grey',
        marginLeft: '5px'
    },
    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    updatedAt: {
        display: 'flex',
    },
    root: {
        '& .MuiTextField-root': {
        margin: theme.spacing(1),
        },
    },
    paper: {
        padding: theme.spacing(2),
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    fileInput: {
        width: '97%',
        margin: '10px 0',
    },
    buttonSubmit: {
        marginBottom: 10,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: '97%',
    },
    [theme.breakpoints.down('sm')]: {
        card: {
        },
        buttonLink: {
            display: 'flex',
            justifyContent: 'center',
        },
        link: {
            display: 'flex',
            justifyContent: 'center',
        },
        updatedAt: {
            display: 'none',
        },
    }
}));