import React, { useState, useEffect } from 'react'
import Orders from '../../components/orders'
import { connect } from 'react-redux'
import { srGetOrders } from '../../sources/order'
import PrivateRoute from '../../components/common/hoc/private-route';

const OrderCon = props => {

    const [ orders, setOrders ] = useState([])

    const getOrders = async () => {
        const { customerId } = props
        let response = {}
        try{

            response = await srGetOrders(customerId)
            setOrders([
                ...response
            ])

        }catch(e) {

        }
    }

    useEffect(() => {
        getOrders()
    }, [])

    return (
        <div>
            <Orders orders={orders}/>
        </div>
    )
}

const mapStatetoProps = state => {
    const { login = {} } = state;
    const { data = {} } = login;
    const { payload = {} } = data;
    const { customerId } = payload
    return {
        customerId
    }
}

export default PrivateRoute(connect(mapStatetoProps)(OrderCon))