/** @jsx jsx */
import { jsx } from '@emotion/core'
import InputComp from '../common/input';
import { styles } from './style'
import Button from '../common/button';
import { validateEmail } from '../../utils/validations'
import Form from '../common/form';
import { Router } from '../../../routes'
import { authenticate } from '../../actions/login';
import { connect } from 'react-redux';
import ComponentStatesHandler from '../common/hoc/component-states-handler';
import { useEffect } from 'react';




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

const Login = (props) => {

    const { authenticate, openErrorDialog, apiResponseCode } = props;
    

    useEffect(() => {
        const { data } = props;
        data && window.sessionStorage.setItem("authToken", data['authToken'])
        apiResponseCode && !apiFailurePredicate() && Router.pushRoute("/products")
        
    }, [apiResponseCode])

    const showErrorDialog = () => {
        const { errorObj: { responseMessage } } = props
        openErrorDialog({ message: responseMessage });
    }
    const apiFailurePredicate = () => apiResponseCode === 'failure'

    const formSubmit = async (values, { setSubmitting }) => {
            setSubmitting(true)
            await authenticate({
                userName: values['emailId'],
                password: values['password']
            })

            setSubmitting(false)
    }

    return (
        <ComponentStatesHandler isError={apiFailurePredicate()}
                                showError={true}
                                openErrorDialog={showErrorDialog}>
            <Form initialValues={initialValues}
                onSubmit={formSubmit}
                validate={values => validate(values)}>
                {
                    ({ values, handleChange, handleBlur, touched, errors, isSubmitting }) => {
                        return (
                            <div css={styles.formCon}>
                                <div css={styles.header}>
                                    <h2>{'Sign IN'}</h2>
                                </div>
                                <div css={styles.inputCon}>
                                    <InputComp label={'Email ID'}
                                        type={"email"}
                                        name={'emailId'}
                                        value={values['emailId']}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={Boolean(touched['emailId']) && errors['emailId']}
                                    />
                                </div>
                                <div css={styles.inputCon}>
                                    <InputComp label={'Password'}
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
                                        isLoading={isSubmitting} />
                                </div>
                            </div>
                        )
                    }
                }
            </Form>
        </ComponentStatesHandler>

    )

}

const mapStateToProps = (state) => {
    const { login } = state
    return login;
}

export default connect(mapStateToProps, {
    authenticate
})(Login)