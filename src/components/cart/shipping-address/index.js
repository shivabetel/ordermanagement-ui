/** @jsx jsx */
import { jsx } from '@emotion/core'
import { styles } from './style'
import RadioButton from '../../common/RadioButton'
import { Router } from '../../../../routes'

const ShippingAddress = ({ shippingAddress = {}, setSelectedShippingAddress = () => {}, 
                            editAddressHandler = () => {} }) => {


    const handleAddressSelection = (id) => {
        setSelectedShippingAddress(id);
    }



    return (
        <>           
            <div css={styles.listItemCon}>
                <div css={styles.listItemLeft}>
                    <RadioButton handleOptionChange={handleAddressSelection}
                        groupName={'address'}
                        value={shippingAddress['addressId']}/>
                </div>
                <div css={styles.listItemMiddle}>
                    <div>
                        <span>{shippingAddress['addressLine1']}</span>
                    </div>
                    <div>
                        <span>{shippingAddress['addressLine2']}</span>
                    </div>
                    <div>
                        <span>{shippingAddress['city']}</span>
                    </div>
                    <div>
                        <span>{shippingAddress['state']}</span>
                        <span>{' '}</span>
                        <span>{shippingAddress['pincode']}</span>
                    </div>
                </div>
                <div css={styles.listItemRight}>
                    <span onClick={() => editAddressHandler(shippingAddress)}>{'Edit'}</span>
                </div>
            </div>
        </>
    )
}


export default ShippingAddress;