/** @jsx jsx */
import { jsx } from '@emotion/core'
import Edit from './edit'
import Create from './add'
import { createShippingAddress } from '../../sources/users'
import { getCurrentPathDetails } from '../../utils/location'
import { Router } from '../../../routes'
import { updateShippingAddress } from '../../sources/shipping-address'

const ShippingAddress = props => {
    const { customerId, address = {} } = props
    const { queryParams } = getCurrentPathDetails()

    const createAddress = async (payload = {} ) => {
        let response = {}
        try{
            payload['customerId'] = customerId
            response = await createShippingAddress(payload)
            Router.replace(`/${queryParams['from']}`)
            

        }catch(e){

        }
        
        
    }

    const updateAddress = async (payload = {} ) => {
        console.log("calling update address")
        let response = {}
        try{
            payload['customerId'] = customerId
            response = await updateShippingAddress(payload)
            Router.replace(`/${queryParams['from']}`)
        }catch(e) {

        }
    }



    const cancelClickHandler = () => {
        Router.replace(`/${queryParams['from']}`)
    }

    return (
        <div>
            {
                queryParams['edit'] ? <Edit cancelClickHandler={cancelClickHandler}
                                            updateAddressHandler={updateAddress}
                                            address={address}/> :  
                <Create createHandler={createAddress}
                        cancelClickHandler={cancelClickHandler}/>
            }
           
        </div>
    )
}

export default ShippingAddress