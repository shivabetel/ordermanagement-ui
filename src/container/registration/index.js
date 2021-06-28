import React from 'react';
import Registration from '../../components/registration';
import RegistrationSucess from '../../components/registration/success';
import { register } from '../../sources/users';
import { Router } from '../../../routes'

class RegistrationCon extends React.Component {

    static async getInitialProps({ query, store, res, req }) {
        return store
    }

    constructor() {
        super()
        this.state = {
            isSuccess: false
        }
    }

    componentDidUpdate(){
        if(this.state.isSuccess){
            Router.pushRoute("/")
        }
    }

    _register = async (formValues) => {
        try {
            await register(formValues)
            this.setState({
                isSuccess: true
            })
        } catch (e) {
            console.log("*E*E*E**E", e)
            this.props.openErrorDialog({
                message: e['responseMessage']
            })
        }

    }



    render() {
        return (
           <>
                <Registration register={this._register}
                    openErrorDialog={this.props.openErrorDialog}/>
           </>
        )
    }

}



export default RegistrationCon