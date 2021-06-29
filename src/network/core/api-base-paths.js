import constants from '../constants'

const endpoints = {
    [constants.ORDERMANAGEMENT_COMMON]: {
        [constants.DEV_ENV]: 'http://localhost:30809',
        [constants.SIT_ENV]: 'http://localhost:30809',
        [constants.PP_ENV]: 'http://localhost:30809',
        [constants.PROD_ENV]: 'http://150.136.202.63'
    }
}

export default endpoints;