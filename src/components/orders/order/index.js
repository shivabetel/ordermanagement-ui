/** @jsx jsx */
import { jsx } from '@emotion/core'
import { styles } from './style'

const Order = ({ order = {}, orderAmount, orderDetailsHandler = () => {} }) => {


    const { orderId, orderDate } = order

    return (
        <div css={styles.listItem}>
            <div css={styles.left}>
                <div css={styles.listItemContent}>
                    <div css={styles.headerCol}>
                        <div css={styles.headerLabelCon}>
                            <span>{'ORDER #'}</span>
                        </div>
                        <div css={styles.headerLabelCon}>
                            <span>{'ORDER PLACED'}</span>
                        </div>
                        <div css={styles.headerLabelCon}>
                            <span>{'TOTAL'}</span>
                        </div>
                    </div>
                    <div css={styles.valueCol}>
                        <div css={styles.valueCon}>
                            <span>{orderId}</span>
                        </div>
                        <div css={styles.valueCon}>
                            <span>{orderDate}</span>
                        </div>
                        <div css={styles.valueCon}>
                            <span css={styles.ruppee}>{'₹'}</span>
                            <span>{orderAmount}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div css={styles.right} onClick={() => orderDetailsHandler(order)}>
                <img style={{ width: '30%' }} src="http://localhost/images/right-arrow.png" />
            </div>
        </div>

    )
}

export default Order