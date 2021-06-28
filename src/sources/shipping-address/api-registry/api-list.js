import constants from '../../../network/constants'

const apiList = {
    updateShippingAddress: {
        endpoint: constants.ORDERMANAGEMENT_COMMON,
        route: '/customermanagement/api/shippingAddress/{customerId}/{addressId}'
    },
    getShippingAddressByCustomerId: {
        endpoint: constants.ORDERMANAGEMENT_COMMON,
        route: '/customermanagement/api/shippingAddress/{customerId}'
    }
}

export default apiList;