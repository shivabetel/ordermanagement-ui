/** @jsx jsx */
import { jsx } from '@emotion/core'
import { styles } from './style'
import Header from '../header';

const Layout = props => {


    return(
        <div>
           <Header/>

            <main css={styles.mainContainer}>
                {props.children}
            </main>
            <footer/>
        </div>
    )
}


export default Layout;