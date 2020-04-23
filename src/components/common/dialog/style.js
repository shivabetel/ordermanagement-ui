export const styles = {
    whitebg: {
        //    display: 'none',
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: '#D7D7D7',
        opacity: 0.5
    },
    dialogHeader: {
        borderBottom: '1px solid #D7D7D7',
        width: '100%',
        padding: '0.5em 0',
        height: '13%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.25em',
        color: '#214796',
        fontWeight: 'bold'
    },
    dialogBox: {
        position: 'fixed',
        top: '50%',
        marginTop: '-15%',
        display: 'flex',
        flexDirection: 'column',
        width: '30%',
        height: '30%',
        background: '#fff',
        left: '50%',
        marginLeft: '-15%',
        borderRadius: '15px',
        boxShadow: '2px 3px 0 1px #D7D7D7'
    },
    dialogBody: {
        height: '52%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    dialogContent: {
       paddingLeft: '0.5em',
       color: '#c00',
       fontSize: '1.25rem',
       fontWeight: 700
    },
    dialogFooter: {
        position: 'absolute',
        bottom: 0,
        border: '1px solid #D7D7D7',
        width: '100%',
        padding: '0.5em 0',
        textAlign: 'right'
    }
}