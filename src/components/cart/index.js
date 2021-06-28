/** @jsx jsx */
import { jsx } from '@emotion/core'
import { styles } from './style'
import CartProduct from './cartproduct';
import ShippingDetails from './shipping-details';
import { srCreateOrder } from '../../sources/order'
import { getShippingAddress } from '../../sources/shipping-address'


let orderAmount = 0
let selectedShippingAddress = null;
const Cart = ({ cartProducts = [], shippingAddress = [], addProduct,
     subtractProduct, clearCart, editAddress, customerId, openErrorDialog }) => {

        console.log("cart",editAddress)

    const setSelectedShippingAddress = (shippingAddressId) => {
        selectedShippingAddress = shippingAddressId;

    }

    const checkout = async () => {
        const payload = {
            customerId,
            orderDate: new Date(),
            address: {
                addressId: selectedShippingAddress
            },
            orderDetails: cartProducts.map(cartProduct => ({
                product: {
                    productId: cartProduct['productId']
                },
                qty: cartProduct['quantity']
            }))
        }
        return srCreateOrder(payload)

    }

 

    orderAmount = cartProducts.reduce((total, cartProduct) => {
        console.log("cartproduct****", cartProduct)
         return total + (cartProduct['quantity'] * cartProduct['price'])
    }, 0)


    return (
        <React.Fragment>

            <div style={{
                height: '100%'
            }}>
                <div css={styles.cartHeader}>
                    <span css={styles.headerText}>Your cart</span>
                </div>
                {
                    cartProducts.length > 0 ? <div css={styles.cartCon}>
                        <div css={styles.cartLeftCon}>

                            <ShippingDetails shippingAddress={shippingAddress}
                                editAddress={editAddress}
                                customerId={customerId}
                                checkout={checkout}
                                clearCart={clearCart}
                                orderAmount={orderAmount}
                                openErrorDialog={openErrorDialog} 
                                setSelectedShippingAddress={setSelectedShippingAddress}/>


                        </div>
                        <div css={styles.cartRightCon}>
                            {
                                cartProducts.map(cartProduct => <CartProduct product={cartProduct}
                                    addProduct={addProduct}
                                    subtractProduct={subtractProduct} />)

                            }
                        </div>
                    </div> : <span css={styles.cartEmpty}>{'Your cart is empty'}</span>
                }
            </div>


        </React.Fragment>
    )
}

export default Cart;