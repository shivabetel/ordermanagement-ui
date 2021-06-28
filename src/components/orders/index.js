/** @jsx jsx */
import { jsx } from '@emotion/core'
import Order from './order'
import { styles } from './style'
import { useState } from 'react'
import OrderDetails from './details'

const Orders = (props) => {

    const [show, setShow] = useState(true)
    const [ selectedOrder, setSelectedOrder ] = useState({})

    const showOrderDetails = (order) => {
        setShow(false)
        setSelectedOrder(order)
    }

    const backClickHandler = () => {
        setShow(true)
        setSelectedOrder(null)
    }

    const { orders = [] } = props
    return (

        <div>

            {
                show ?
                    <div>
                        <div css={styles.header}>
                            <span css={styles.headerText}>{'Your Orders'}</span>
                        </div>
                        <div>
                            {
                                orders.map(order => {
                                    const { orderDetails = [] } = order
                                    let orderAmount = orderDetails.reduce((total, details) => {
                                        return total + details['price']
                                    }, 0)
                                    return <Order order={order}
                                        orderAmount={orderAmount} 
                                        orderDetailsHandler={showOrderDetails}/>
                                })
                            }
                        </div>

                        <div css={styles.noOrdersTextCon}>
                            {orders.length == 0 ? 'No Orders' : null}
                        </div>
                    </div>
                    : <OrderDetails order={selectedOrder}
                                     backClickHandler={backClickHandler}/>

            }

        </div>
    )
}

export default Orders