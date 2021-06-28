import React, { Component, useState } from 'react';
import Cart from '../../components/cart';
import { connect } from 'react-redux';
import PrivateRoute from '../../components/common/hoc/private-route';
import { addProduct, subtractProduct , clearCart} from '../../actions/products'
import { editAddress } from '../../actions/edit-address'


class CartContainer extends Component {



    render(){
        const { cartProducts, addProduct, subtractProduct, clearCart, editAddress,
            customerId, openErrorDialog } = this.props;
        console.log("cart con", this.props)
        return (
            <Cart cartProducts={cartProducts}

                  addProduct={addProduct}
                  subtractProduct={subtractProduct}
                  clearCart={clearCart}
                  editAddress={editAddress}
                  customerId={customerId}
                  openErrorDialog={openErrorDialog}/>
        )
    }
}

const mapStateToProps = (state) => {
    
    const { login = {} } = state;
    const { data = {} } = login;
    const { payload = {} } = data;
    const { customerId } = payload
    console.log("state['cart']['products']",state);
    return {
        cartProducts: state['cart']['products'],
        customerId
    }
}


export default PrivateRoute(connect(mapStateToProps,{
    addProduct,
    subtractProduct,
    clearCart,
    editAddress
})(CartContainer));