const initialState = {
    products: []
}

export const cartReducer = (state = initialState, action ) => {

    const { type, payload } = action;
    switch (type) {
        case 'ADD_PRODUCT' : {
            const  products  = state['products'] || []
           const product =   products.find(product => product['productId'] === payload['productId'])
           product ? product['quantity'] = product['quantity'] + 1 : products.push(payload)
            return {
                ...state,
                products: [...products]
            }
        }
        case 'PRODUCT_SUBTRACT': {
            const  products  = state['products'] || []
           const product =   products.find(product => product['productId'] === payload['productId'])
           product ? product['quantity'] = product['quantity'] - 1 : products.push(payload)
            return {
                ...state,
                products: [...products]
            }
        }
        case 'CLEAR_CART': {
            return {
                ...state,
                products: []
            }
        }
        default: {
            return state;
        }
    }
}