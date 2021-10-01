import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    li: {
        paddingLeft: '0px',
        textAlign: 'left',
        fontSize: '15px',
        fontWeight: '500',
        minHeight: '40px',
        display: 'flex',
        alignItems: 'center',
        textTransform: 'capitalize',
        listStyle: 'none',
    },
    delButton: {
        display: 'flex',
    },
    toDoStyle: {
        display: 'flex',
        alignItems: 'center',
    },
});