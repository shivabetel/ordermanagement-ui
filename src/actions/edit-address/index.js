export const editAddress = (inputObj = {} ) => {
    return {
        type: 'EDIT_ADDRESS',
        payload: {
            ...inputObj
        }
    }
}