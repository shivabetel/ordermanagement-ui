
import ErrorDialog from './error'

const DialogType = {
    'error': ErrorDialog
}

const Dialog = (props) => {

    const { type = 'error' } = props
     const DialogComponent =  DialogType[type]

    return (
        <DialogComponent {...props}/>
    )
}

export default Dialog