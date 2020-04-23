/** @jsx jsx */
import { jsx } from '@emotion/core'
import Input from '../common/input';
import { styles } from './style'
import Button from '../common/button';
import { validateEmail } from '../../utils/validations'
import Form from '../common/form';
import {srLogin} from '../../sources/login'

console.log("srLogin",srLogin)


const initialValues = {
    emailId: '',
    password: ''
}



const validate = (formValues) => {
    const errorObj = {}
    if (!formValues['emailId']) {
        errorObj['emailId'] = 'Required'
    }
    if (formValues['emailId'] && !validateEmail(formValues['emailId'])) {
        errorObj['emailId'] = 'Please enter a valid email id'
    }
    if (!formValues['password']) {
        errorObj['password'] = 'Required'
    }

    return errorObj
}

const Login = () => {

    const formSubmit = async (values, {setSubmitting}) => {
        try{
          setSubmitting(true)
          let response = await srLogin({
              userName: values['emailId'],
              password: values['password']
          })
          console.log("response",response);
          setSubmitting(false)
        }catch(e){
            console.log("e",e)
        }
        
        

    }

    return (
        <Form initialValues={initialValues}
              onSubmit={formSubmit}
              validate={values => validate(values)}>
            {
                ({ values, handleChange , handleBlur, touched, errors , isSubmitting}) => {
                    return (
                        <div css={styles.formCon}>
                            <div css={styles.header}>
                                <h2>{'Sign IN'}</h2>
                            </div>
                            <div css={styles.inputCon}>
                                <Input label={'Email ID'}
                                    type={"email"}
                                    name={'emailId'}
                                    value={values['emailId']}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={Boolean(touched['emailId']) && errors['emailId']}
                                />
                            </div>
                            <div css={styles.inputCon}>
                                <Input label={'Password'}
                                    type={"password"}
                                    name={'password'}
                                    value={values['password']}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={Boolean(touched['password']) && errors['password']}
                                />
                            </div>
                            <div>
                                <Button type="submit" 
                                        isLoading={false}/>
                            </div>
                        </div>
                    )
                }
            }
        </Form>
    )

}

export default Login