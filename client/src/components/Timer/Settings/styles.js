import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({

    settings: {
        display: 'flex',
        display: '-webkit-flex',
        justifyContent: 'space-around',
        marginTop: '25px',
        },
        settingsSection: {
            textAlign: 'center',
        },
        settingsSectionLabel: {
            fontWeight: '700',
        },
        settingsSectionButton: {
            fontSize: '1.1rem',
            fontWeight: '700',
            border: '1px solid #4ebfc9',
            backgroundColor: 'transparent',
            color: '#fff',
            borderRadius: '6px',
            outline: 'none',
            width: '35px',
            height: '35px',
            display: 'inlineFlex',
            alignItems: 'center',
            justifyContent: 'center',
            webkitTransition: 'all 0.25s ease-out',
            mozTransition: 'all 0.25s ease-out',
            transition: 'all 0.25s ease-out',
        },
        settingsSectionSpan: {
        width: '45px',
        height: '45px',
        display: 'inlineFlex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: '50%',
        color: '#444',
        marginLeft: '10px',
        marginRight: '10px',
        fontSize: '1.1rem',
        },
    });
