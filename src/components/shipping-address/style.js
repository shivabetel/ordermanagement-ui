export const styles = {
    header: {
        color: '#214796',
        width: '40%',
        maxWidth: '40%',
        borderBottom: '1px solid #D7D7D7',
        marginBottom: '1em',
        '& h2': {
            margin: '0 0 0.25em 0'
        }
    },
    inputCon: {
        marginBottom: '1em',
        width: '40%',
        maxWidth: '40%'
    },
    formCon: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid #D7D7D7',
        // boxShadow: '1px 0px 5px 2px #D7D7D7',
        padding: '1em 0'
    },
    cancelButton: {
        border: 'none',
        padding: '1em 4em',
        background: '#214796',
        borderRadius: '5px',
        color: '#fff',
        '&:focus': {
            outline: 'none'
        },
        marginLeft: '1em'
    }
}