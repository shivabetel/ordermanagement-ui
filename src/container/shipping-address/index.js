import React from 'react'
import ShippingAddress from '../../components/shipping-address'
import { connect } from 'react-redux'

class ShippingAddressCon extends React.Component {


    render(){
        const { customerId, address } = this.props
        return (
            <div>
                <ShippingAddress customerId={customerId}
                                 address={address}/>
            </div>
        )
    }
}

const mapStatetoProps = state => {
    console.log("address::: state", state)
    const { login = {}, editAddress = {} } = state;
    const { data = {} } = login;
    const { payload = {} } = data;
    const { customerId } = payload
    return {
        customerId,
        address: editAddress
    }
}

export default connect(mapStatetoProps)(ShippingAddressCon)