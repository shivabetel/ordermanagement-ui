
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { styles } from './style'
import CircularProgress from '@material-ui/core/CircularProgress'


const Button = props => {


    const { type = 'button', label = 'Submit', buttonClickHandler, isLoading = false } = props
    return (
        <button css={styles.button} 
                type={type}
                onClick={buttonClickHandler}>
            <span css={styles.loader}>{isLoading ? <CircularProgress size={12}
                                             color={"#fff"}/> : label}</span>
        </button>
    )
}

export default Button