/** @jsx jsx */
import { jsx } from '@emotion/core'
import { styles } from './style'
import Link from 'next/link'

const Header = props => {


    return (
        <header css={styles.header}>
            <div css={styles.left}>
                {'PlayO Book'}
            </div>
            <div css={styles.right}>
                <div css={styles.link}>
                    <Link href="/login">
                        <a>Sign in</a>
                    </Link>
                    <Link href="/registration" prefetch>
                        <a>Sign Up</a>
                    </Link>
                </div>

            </div>
        </header>
    )
}

export default Header;