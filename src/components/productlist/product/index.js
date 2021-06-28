/** @jsx jsx */
import { jsx } from '@emotion/core'
import { styles } from './style'
import Button from '../../common/button';

const Product = ({ product, onAddToCart }) => {
    product.quantity = 1;
    return (
        <div css={styles.listItem}>
            <div css={styles.tile}>
                <div>
                    <img src={product.image}
                        alt={product.productId}
                        style={{ width: '80%', height: '120px' }}></img>
                </div>
                <div>
                    <span css={styles.listItemLabel}>{product.productName}</span>
                </div>
                <div css={styles.priceCon}>
                    <div style={{width: '40%'}}>
                        <span css={styles.ruppee}>{'₹'}</span>
                        <span css={styles.priceText}>{product.price}</span>
                    </div>
                    <div>
                        <Button label={'Add to Cart'}
                                buttonStyle={styles.cartButton}
                                buttonClickHandler={() => onAddToCart(product)}></Button>
                        {/* <Button color="primary" variant="contained" onClick={() => onAddToCart(product)}>Add to Cart</Button> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Product;