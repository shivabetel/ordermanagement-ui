/** @jsx jsx */
import { jsx } from '@emotion/core'
import { styles } from './style'
import Header from '../header';

const Layout = props => {


    return(
        <div css={styles.layoutCon}>
           <Header/>

            <main css={styles.mainCon}>
                {props.children}
            </main>
            <footer/>
        </div>
    )
}


export default Layout;