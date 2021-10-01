import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appMainBar: {
        borderRadius: 10,
        margin: '10px 0',
        padding: '10px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    appSubBar: {
        borderRadius: 10,
        margin: '10px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        background: 'transparent',
        boxShadow: 'none',
    },
    logo : {
        display: 'flex',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'center',
        width: '400px',
        [theme.breakpoints.down('sm')]: {
        width: 'auto',
        },
    },
    cardButton: {
        display: 'flex',
        justifyContent: 'center',
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
}));