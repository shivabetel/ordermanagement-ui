import React from 'react'
import Login from '../../components/login';


class LoginCon extends React.Component {


    render(){
        return (
            <div>
                <Login openErrorDialog={this.props.openErrorDialog}/>
            </div>
        )
    }
}

export default LoginCon;