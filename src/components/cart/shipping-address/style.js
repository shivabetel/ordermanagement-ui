export const styles = {
    listItemCon: {
        display: 'flex',
        padding: '0.5em',
        alignItems: 'center'
        
    },
    listItemLeft: {
        width: '5%',
        marginRight: '1em'
    },
    listItemMiddle: {
        width: '60%'
    },
    listItemRight: {
        width: '35%',
        textAlign: 'right',
        fontWeight: 'bold',
        paddingRight: '0.25em',
        '& span': {
            color: '#E02020',
            cursor: 'pointer'
        }
    }
}