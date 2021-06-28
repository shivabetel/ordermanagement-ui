/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Snackbar, SnackbarContent } from "@material-ui/core";
import { useState, useEffect } from "react";
import PubSub from '../../../utils/pub-sub'
import CheckCircleIcon from '@material-ui/icons/CheckCircleOutlineOutlined'
import { styles } from "./style";

const vertical = 'top'
const horizontal = 'center'

const variantIcon = {
    success: CheckCircleIcon
}

const Toast = props => {

    const [ state, setState ] = useState({
        open: false,
        msg: '',
        variant: '',
        ackWaitTime: 500
    })

    useEffect(() => {
        PubSub.subscribe('SHOW_TOAST', handleOpen)
        return(() => PubSub.unsubscribe('SHOW_TOAST'))
    }, [])

    const handleClose = () => {
        setState({
            ...state,
            open: false,
            msg: null,
            variant: null,
            ackWaitTime: 500
        })
    }

    const handleOpen = (eventName = '', {msg = '', variant = '', ackWaitTime = 500}) => {
        setState({
            ...state,
            open: true,
            msg: msg,
            variant,
            ackWaitTime
        })
    }

    const Icon = variantIcon[state['variant']] || null

    return (
        <Snackbar 
            css={styles[state.variant]}
            autoHideDuration={state['ackWaitTime']}
            anchorOrigin={{vertical, horizontal}}
            key={`${vertical},${horizontal}`}
            open={state['open']}
            onClose={handleClose}>

                <SnackbarContent message={
                    <span css={styles.messageCon}>
                        {Icon && <Icon css={styles.icon}/>}
                        <span css={styles.messageText}>{state['msg']}</span>
                    </span>
                }/>
        </Snackbar>
    )

}

export default Toast