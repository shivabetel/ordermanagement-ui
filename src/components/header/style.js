export const styles = {
    header: {
        height: '65px',
        borderBottom: '1px solid #D7D7D7',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 1px 4px 0px #D7D7D7'

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
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'relative',
        '& a': {
            fontSize: '1em',
            textDecoration: 'none',
            marginRight: '1em',
            color: '#000000',
            fontWeight: 'bold'
        }
    },
    cartImg: {
        background: "#000000",
        cursor: 'pointer',
        width: '50%'
    },
    cartCon: {
       position: 'relative',
       width: '10%',
       
    },
    cartCountText: {
        position: 'absolute',
        top: '-12px',
        right: '23px',
        color: '#E02020',
        fontWeight: 'bold'
    }
}