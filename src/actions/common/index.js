export const updateFetchTemplate = (_stateNameSpace) => {
    return (response) => {
        return {
            type: `${_stateNameSpace}_UPDATE`,
            payload: {
                ...response
            }
        }
    }
}
export const errorFetchTemplate = (_stateNameSpace) => {
    return (response) => {
        return {
            type: `${_stateNameSpace}_ERROR`,
            payload: {
                ...response
            }
        }
    }
}