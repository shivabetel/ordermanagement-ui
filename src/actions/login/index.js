import { srLogin } from "../../sources/login"
import { updateFetchTemplate, errorFetchTemplate } from '../common'



const updateFetch = updateFetchTemplate("login")
const errorFetch = errorFetchTemplate('login')

const authenticate = function (input = {}) {
    return async(dispatch) => {
        let response = {}
        try{

            response = await srLogin(input)
            dispatch(updateFetch({
                response: {
                    isAuthenticated: true,
                    ...response 
                }
            }))

        }catch(e) {
            dispatch(errorFetch({
                response: {
                    isAuthenticated: false
                },
                errorObj: e
            }))
        }
    }
}
export {
    authenticate
}