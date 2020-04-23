export const styles = {
    header: {
        height: '60px',
        borderBottom: '1px solid #D7D7D7',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    left: {
        flex: 1,
        width: '50%',
        textAlign: 'right',
        fontSize: '1.5em',
        fontWeight: 'bold'
    },
    right: {
        flex: 1,
        width: '50%',
        textAlign: 'right'
    },
    link: {
        marginRight: '1em',
        '& a': {
            fontSize: '1em',
            textDecoration: 'none',
            marginRight: '1em',
            color: '#214796'
        }
    }
}