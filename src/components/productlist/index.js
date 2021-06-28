import React from 'react';
import Product from './product';
import PubSub from '../../utils/pub-sub'

const ProductList = ({products = [], addProduct}) => {

    console.log("products",products);
   
    const addProductHandler = (product) => {
        addProduct(product)
        PubSub.publish('SHOW_TOAST', {msg: 'Product added to cart!', variant: 'success'})

    }

    return (
        <div style={{display: 'flex',
            'flexWrap': 'wrap',
            'flex': '1 0 85%',
            marginTop: '1em'}}>
           {
              products && products.map(product => <Product key={product.productId} product={product} onAddToCart={addProductHandler}/>)
           }
        </div>
    )
}

export default ProductList;