import constants from '../../../network/constants'

const apiList = {
    register: {
        endpoint: constants.PLAYO_COMMON,
        route: '/api/user'
    },
    checkAvailability: {
        endpoint: constants.PLAYO_COMMON,
        route: '/api/user/checkAvailability'
    }
}

export default apiList