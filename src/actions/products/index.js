import { srGetProducts } from '../../sources/products'
import { updateFetchTemplate, errorFetchTemplate } from '../common'



const updateFetch = updateFetchTemplate("products")
const errorFetch = errorFetchTemplate('products')

export const getProducts = function (filters) {
    return async (dispatch, getState) => {
        let response = {};
        response = await srGetProducts(filters);
        dispatch(updateFetch({
            response: {
                products: [...response]
            }
        }))
    }
}

export const addProduct = function (product) {
    return {
        type: 'ADD_PRODUCT',
        payload: product
    }
}

export const subtractProduct = function (product) {
    return {
        type: 'PRODUCT_SUBTRACT',
        payload: product
    }
}

export const clearCart = function (){
    return {
        type: 'CLEAR_CART'
    }
}
