import  constants from '../constants'

const endpoints = {
    [constants.ORDERMANAGEMENT_COMMON]: {
        [constants.DEV_ENV]: 'http://localhost:9200',
        [constants.SIT_ENV]: 'http://localhost:9200',
        [constants.PP_ENV]: 'http://localhost:9200',
        [constants.PROD_ENV]: 'http://localhost:9200'
    }
}

export default endpoints;