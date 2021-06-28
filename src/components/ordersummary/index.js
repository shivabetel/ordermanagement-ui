/** @jsx jsx */
import { jsx } from '@emotion/core'
import { styles } from './style'

const OrderSummary = props => {

    const { orderAmount = 0 } = props
    return (
        <div css={styles.topCon}>
            <div css={styles.itemCon}>
                <div css={styles.labelCon}>
                    <span css={styles.label}>{'Item(s) Subtotal'}</span>
                </div>
                <div css={styles.valueCon}>
                    <span css={styles.ruppee}>{'₹'}</span>
                    <span css={styles.value}>{orderAmount}</span>
                </div>
            </div>
            <div css={styles.itemCon}>
                <div css={styles.labelCon}>
                    <span css={styles.label}>{'Shipping'}</span>
                </div>
                <div css={styles.valueCon}>
                    <span css={styles.ruppee}>{'₹'}</span>
                    <span css={styles.value}>{0.00}</span>
                </div>
            </div>
            <div css={styles.itemCon}>
                <div css={styles.labelCon}>
                    <span css={styles.label}>{'Grand Total'}</span>
                </div>
                <div css={styles.valueCon}>
                    <span css={styles.ruppee}>{'₹'}</span>
                    <span css={styles.value}>{orderAmount}</span>
                </div>
            </div>
        </div>


    )
}

export default OrderSummary