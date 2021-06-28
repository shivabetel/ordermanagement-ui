import React, { Children } from 'react'

const ComponentStatesHandler = (props) => {
    const { isLoading = false, isError = false, children, showError = false, openErrorDialog } = props
    
    const preloaderComponent = () => {
        const { preloader } = props;
        if(preloader){
            return preloader
        }
        return (
            <div>
                loading....
            </div>
        )
    }

    const renderErrorComponent = () => {
        const { errorComp } = props;
        if(errorComp){
            return errorComp
        } 

        return <div>Error</div>
    }

   

    if(isLoading){
        return preloaderComponent()
    }else if(isError){
        if(!showError)
        return renderErrorComponent()
        else{
            openErrorDialog && openErrorDialog()
            return children
        }
         
    }else{
        return children
    }
}

export default ComponentStatesHandler