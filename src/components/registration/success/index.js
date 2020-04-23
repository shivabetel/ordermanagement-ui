/** @jsx jsx */
import { jsx } from '@emotion/core'
import Button from '../../common/button';


const RegistrationSucess = props => {


    return (
        <div>
            <div>
                <span>
                    {'We have sent a mail to your email address. Kindly follow the instructions, to activate your account'}
                </span>

            </div>
            <div style={{textAlign: 'center',
    marginTop: '1em'}}>
                <Button label="OK"
                    type="button"></Button>
            </div>
        </div>
    )
}

export default RegistrationSucess