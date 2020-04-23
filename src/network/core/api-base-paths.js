import  constants from '../constants'

const endpoints = {
    [constants.PLAYO_COMMON]: {
        [constants.DEV_ENV]: 'http://localhost:8081',
        [constants.SIT_ENV]: 'http://localhost:8081',
        [constants.PP_ENV]: 'http://localhost:8081',
        [constants.PROD_ENV]: 'http://localhost:8081'
    }
}

export default endpoints;