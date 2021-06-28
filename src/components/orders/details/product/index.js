/** @jsx jsx */
import { jsx } from '@emotion/core'
import { styles } from './style'

const Product = ({ product = {}, price }) => {


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
            </div>
            <div css={styles.right}>
                <span css={styles.ruppee}>{'₹'}</span>
                <span css={styles.price}>{price}</span>
            </div>
        </div>
    )
}


export default Product;