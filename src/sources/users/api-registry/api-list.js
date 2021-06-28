import constants from '../../../network/constants'

const apiList = {
    register: {
        endpoint: constants.ORDERMANAGEMENT_COMMON,
        route: '/customermanagement/api/registration'
    },
    checkAvailability: {
        endpoint: constants.ORDERMANAGEMENT_COMMON,
        route: '/customermanagement/api/registration/checkAvailability'
    },
    shippingAddress: {
        endpoint: constants.ORDERMANAGEMENT_COMMON,
        route: '/customermanagement/api/shippingAddress/{customerId}'
    }
}

export default apiList