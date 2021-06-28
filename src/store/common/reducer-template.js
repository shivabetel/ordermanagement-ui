export default function (stateNameSpace) {
    return (state = {}, action) => {
        const { type, payload = {} } = action
        switch (type) {
            case `${stateNameSpace}_START`: {
                return {
                    isLoading: true,
                    apiResponseCode: null
                }
            }
            case `${stateNameSpace}_UPDATE`: {
                return {
                    isLoading: false,
                    apiResponseCode: 'success',
                    data: {
                        ...payload['response']
                    }
                }
            }
            case `${stateNameSpace}_ERROR`: {
                return {
                    isLoading: false,
                    apiResponseCode: 'failure',
                    data: {
                        ...payload['response']
                    },                    
                    errorObj: {
                        ...payload['errorObj']
                    }
                }
            }        
        
            default:
                return state;
        }
    }
}

