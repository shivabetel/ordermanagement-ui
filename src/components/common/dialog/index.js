/** @jsx jsx */
import { jsx } from '@emotion/core'
import { styles } from './style'
import Button from '../button';


const Dialog = (props) => {

    const { handleDialogOk, message, title } = props

    return (
        <>
            <div css={styles.whitebg}></div>
            <div css={styles.dialogBox}>
                <div css={styles.dialogHeader}>
                  <span>{title}</span>
                </div>
                <div css={styles.dialogBody}>
                    <div css={styles.dialogContent}>
                        <span>{message}</span>
                    </div>
                </div>
                <div css={styles.dialogFooter}>
                    <Button type='button'
                            label={'OK'}
                            buttonClickHandler={handleDialogOk} />
                </div>
            </div>
        </>
    )
}

export default Dialog