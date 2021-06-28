export const editAddressReducer = (state = {}, action )  => {
    const { type , payload = {} } = action
    switch(type) {
        case 'EDIT_ADDRESS': {
             return {
                 ...payload
             }
        }
        default: {
            return state;
        }
    }
}