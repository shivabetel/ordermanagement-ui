import constants from '../../../network/constants'

const apiList = {
    order: {
        endpoint: constants.ORDERMANAGEMENT_COMMON,
        route: '/customerordermanagement/api/order/{customerId}'
    },
    getOrders: {
        endpoint: constants.ORDERMANAGEMENT_COMMON,
        route: '/customerordermanagement/api/order/{customerId}'
    }
}

export default apiList;