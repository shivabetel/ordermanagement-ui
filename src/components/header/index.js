/** @jsx jsx */
import { jsx } from '@emotion/core'
import { styles } from './style'
import Link from 'next/link'
import withIsAuthenticated from '../common/hoc/authenticated'
import { connect } from 'react-redux'



const Header = ({ isAuthenticated = false, cartCount }) => {


    return (
        <header css={styles.header}>
            <div css={styles.left}>
                <img style={{
                    width: '13%',
                    position: 'relative',
                    top: '4px'
                }} src="/images/logo.png" />
            </div>
            <div css={styles.right}>
                <div css={styles.link}>
                    {!isAuthenticated &&
                        <div>
                            <Link href="/login">
                                <a>Sign in</a>
                            </Link>
                            <Link href="/registration" prefetch>
                                <a>Sign Up</a>
                            </Link>
                        </div>
                    }
                    <div>
                        <Link href="/products">
                            <a>Products</a>
                        </Link>
                    </div>
                    <div>
                        <Link href="/profile">
                            <a>Profile</a>
                        </Link>
                    </div>
                    <div>
                        <Link href="/orders">
                            <a>Orders</a>
                        </Link>
                    </div>
                    <div>
                        <Link href="/cart">
                            <div>
                                <a>
                                    <img css={styles.cartImg} src="/images/cart.png" />
                                </a>
                                {<span css={styles.cartCountText}>{cartCount ? cartCount : null}</span>}
                            </div>

                        </Link>
                    </div>

                </div>


            </div>
        </header>
    )
}


const mapStateToProps = state => {
    const { cart = {} } = state;
    const { products = [] } = cart
    return {
        cartCount: products.length
    }
}

export default withIsAuthenticated(connect(mapStateToProps)(Header));