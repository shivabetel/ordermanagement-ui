/** @jsx jsx */
import { jsx } from '@emotion/core'
import { styles } from './style'
import Product from './product'
import OrderSummary from '../../ordersummary'

const OrderDetails = ({ order = {}, backClickHandler }) => {

    const { orderId, orderDate, orderStatus, address, orderDetails = [] } = order
    let orderAmount = orderDetails.reduce((total, detail) => {
          return total+detail['price']
    },0)
    return (
        <div css={styles.main}>
            <div>
                <span css={styles.back} onClick={backClickHandler}>{'Back'}</span>
            </div>
            <div css={styles.first}>
                <div css={styles.header}>
                    <span>{'ORDER'}</span>
                </div>
                <div css={styles.orderInfoCon}>
                    <div css={styles.row}>
                        <div css={styles.col}>
                            <span css={styles.label}>{'Order # : '}</span>
                            <span css={styles.value}>{orderId}</span>
                        </div>
                        <div css={styles.col}>
                            <span css={styles.label}>{'Order Date : '}</span>
                            <span css={styles.value}>{orderDate}</span>
                        </div>
                    </div>
                    <div css={styles.row}>
                        <div css={styles.col}>
                            <span css={styles.label}>{'Order Status : '}</span>
                            <span css={styles.value}>{orderStatus}</span>
                        </div>

                    </div>
                </div>
            </div>
            <div css={styles.second}>
                <div css={styles.header}>
                    <span>{'ORDER SUMMARY'}</span>
                </div>
                <div  css={styles.summaryCon}>
                    <OrderSummary orderAmount={orderAmount} />
                </div>

            </div>
            <div css={styles.third}>
                <div css={styles.header}>
                    <span>{'ORDER DETAILS'}</span>
                </div>
                <div>
                    {
                        orderDetails.map(detail => <Product product={detail['product']}
                            price={detail['price']} />)
                    }
                </div>
            </div>
            <div css={styles.fourth}>
                <div css={styles.header}>
                    <span>{'SHIPPING ADDRESS'}</span>
                </div>
                <div css={styles.shippingInfoCon}>
                    <div>
                        <span css={styles.value}>{address['addressLine1']}</span>
                    </div>
                    <div>
                        <span css={styles.value}>{address['addressLine2']}</span>
                    </div>
                    <div>
                        <span css={styles.value}>{address['city']}</span>
                    </div>
                    <div>
                        <span css={styles.value}>{address['state']}</span>
                        <span css={styles.value}>{' '}</span>
                        <span css={styles.value}>{address['pincode']}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetails