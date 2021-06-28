import { Dialog, DialogContent, DialogContentText, DialogTitle, DialogActions, Button } from '@material-ui/core'

const ErrorDialog = (props) => {

    const { message = '', title = '', handleDialogOk, open = false, handleClose} = props

    return (
        <Dialog open={open}
                onClose={handleClose}>
            <DialogTitle onClose={handleClose}>
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                   {message}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleDialogOk}>OK</Button>
            </DialogActions>
        </Dialog>
    )
}

export default ErrorDialog