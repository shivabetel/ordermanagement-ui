import React, { useState, useEffect } from 'react';
import { styles } from './style'
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ShippingAddress from '../shipping-address';
import { withStyles } from '@material-ui/core/styles'
import Button from '../../common/button';
import { Router } from '../../../../routes'
import OrderSummary from '../../ordersummary';
import PubSub from '../../../utils/pub-sub'
import ComponentStatesHandler from '../../common/hoc/component-states-handler';
import { getShippingAddress } from '../../../sources/shipping-address'
import ContentLoader from 'react-content-loader'




const panels = [
    {
        label: 'Shipping Address',
        cd: 'SA'
    },
    {
        label: 'Order Summary',
        cd: 'OS'
    },
    {
        label: 'Payment',
        cd: 'P'
    }
]

const Payment = ({ checkout, openErrorDialog, clearCart }) => {
    const [loading, setLoading] = useState(false)
    const onCheckoutClick = async () => {
        let response = {}
        try {
            setLoading(true)
            response = await checkout();
            setLoading(false)
            clearCart()
            Router.pushRoute("/products")
            PubSub.publish('SHOW_TOAST', { msg: 'Order completed successfully!', variant: 'success', ackWaitTime: 3000 })

        } catch (e) {
            console.log("checkout eror", e)
            setLoading(false)
            const { responseMessage } = e
            // openErrorDialog({ message: responseMessage });
        }
    }
    return (
        <div style={{ textAlign: 'right' }}>
            <Button label={'Checkout'}
                buttonClickHandler={onCheckoutClick}
                isLoading={loading} />
        </div>
    )
}

const ShippingAddressPanelComp = ({ classes, editAddress,
    setSelectedShippingAddress, customerId }) => {
    const [shippingAddresses, setShippingAddresses] = useState([])
    const [loading, setLoading] = useState(false)

    const preloader = () => {
        return (
            <div>
                <ContentLoader
                    speed={2}
                    width={440}
                    height={160}
                    viewBox="0 0 400 160"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <circle cx="10" cy="20" r="10" />
                    <rect x="35" y="0" rx="2" ry="2" width="300" height="50" />
                    <rect x="365" y="10" rx="2" ry="2" width="50" height="20" />

                    <circle cx="10" cy="90" r="10" />
                    <rect x="35" y="70" rx="2" ry="2" width="300" height="50" />
                    <rect x="365" y="80" rx="2" ry="2" width="50" height="20" />
                </ContentLoader>
            </div>
        )
    }
    const addNewAddress = () => {
        Router.pushRoute("/address?from=cart")
    }
    const editAddressHandler = (address = {}) => {
        editAddress(address)
        Router.pushRoute("/address?from=cart&edit=true")
    }
    const _getShippingAddresses = async () => {
        let response = {}
        try {
            setLoading(true)
            response = await getShippingAddress(customerId)
            response && setShippingAddresses(response)
            setLoading(false)

        } catch (e) {
            setLoading(false)
            //TODO open error dialog

        }
    }

    useEffect(() => {

        _getShippingAddresses()

    }, [])
    return (
        <ComponentStatesHandler isLoading={loading}
                                preloader={preloader()}>
            <div className={classes.panelSubHeader}>
                <span className={classes.addNewAddressLinkText} onClick={addNewAddress}>Add New address</span>
            </div>
            {
                shippingAddresses.map(shippingAddress => <ShippingAddress shippingAddress={shippingAddress}
                    editAddressHandler={editAddressHandler}
                    setSelectedShippingAddress={setSelectedShippingAddress} />)
            }
        </ComponentStatesHandler>
    )
}


const ShippingDetails = ({ classes, checkout,
    clearCart, editAddress, orderAmount, openErrorDialog,
    setSelectedShippingAddress, customerId }) => {
    return (
        <div>
            {
                panels.map(panel => (
                    <ExpansionPanel expanded={true}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}
                        >
                            <span className={classes.panelHeader}>{panel['label']}</span>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails classes={{
                            root: classes.root
                        }}>

                            {
                                panel['cd'] === 'SA' ? <ShippingAddressPanelComp classes={classes}
                                    customerId={customerId}
                                    editAddress={editAddress}
                                    setSelectedShippingAddress={setSelectedShippingAddress} />
                                    : panel['cd'] === 'OS' ? <OrderSummary orderAmount={orderAmount} />
                                        : panel['cd'] === 'P' ? <Payment checkout={checkout}
                                            clearCart={clearCart} />
                                            : null
                            }


                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                ))
            }

        </div >
    )
}

export default withStyles(styles)(ShippingDetails);