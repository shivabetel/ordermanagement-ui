import React from 'react'
import App from 'next/app'
import Layout from '../src/components/layout';
import withRedux from 'next-redux-wrapper'
import createStore from '../src/store/create-store'
import { Provider } from 'react-redux'
import DialogComponent from '../src/components/common/dialog_materialui'
import { CssBaseline } from '@material-ui/core';
import baseStyles from '../src/styles/base'
import Toast from '../src/components/common/toast';


let handleDialogOk = null

class PlayoBooking extends App {

    constructor(){
        super()
        this.state = {
            dialogState: {
              title: 'Error',
              open: false,
              dialogType: 'error',
              message: 'Something went wrong'
            }
        }
    }

    closeDialog = () => {
        this.setState({
            dialogState: {
                ...this.state.dialogState,
                open: false
            }
        })
    }

    openErrorDialog = ({type = 'error', message = 'something went wrong'}) => {
        this.setState({
            dialogState: {
                ...this.state.dialogState,
                open: true,
                dialogType: type,
                message: message
                
            }
        })
    }

    render() {

        console.log(this.props);
        const { Component, store } = this.props;


        return (
            <Provider store={store}>
                <CssBaseline/>
                <Layout>
                    <Toast/>
                    <Component {...this.props}
                               openErrorDialog={this.openErrorDialog}/>
                    <DialogComponent type={this.state.dialogState.type}
                                     open={this.state.dialogState.open}
                                     title={this.state.dialogState.title}
                                     handleDialogOk={this.closeDialog}
                                     handleClose={this.closeDialog}
                                     message={this.state.dialogState.message}/>
                </Layout>
            </Provider>
        )
    }

}


export default withRedux(createStore, {debug: true})(PlayoBooking);

