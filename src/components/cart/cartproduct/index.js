/** @jsx jsx */
import { jsx } from '@emotion/core'
import { styles } from './style'

const CartProduct = ({ product = {}, addProduct, subtractProduct }) => {

    console.log("cart product comp", product)

    return (

        <div css={styles.container}>
            <div css={styles.left}>
                <img src={product['image']}
                    style={{ height: '80px' }}></img>
            </div>
            <div css={styles.middle}>
                <div css={styles.textCon}>
                    <span css={styles.productName}>{product['productName']}</span>
                </div>
                <div>
                    <div css={styles.plusCon} onClick={() => addProduct(product)}>
                        <span css={styles.plus}>{'+'}</span>
                    </div>
                    <span>{product['quantity']}</span>
                    <div css={styles.minusCon} onClick={product['quantity'] > 0 ? () => subtractProduct(product) : null}>
                        <span>{'-'}</span>
                    </div>
                </div>
            </div>
            <div css={styles.right}>
                <span css={styles.ruppee}>{'₹'}</span>
                <span css={styles.price}>{product['price'] * product['quantity']}</span>
            </div>
        </div>
    )
}


export default CartProduct;