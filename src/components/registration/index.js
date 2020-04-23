/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useState, useEffect } from 'react'
import Input from '../common/input';
import { styles } from './style'
import Button from '../common/button';
import { validateEmail } from '../../utils/validations'
import Form from '../common/form';
import { register, checkAvailablity } from '../../sources/users';
import { debounceEvent } from '../../utils/app'
import { CircularProgress } from '../../../node_modules/@material-ui/core';

const initialValues = {
    emailId: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: ''
}

let debouncedEvent = null



const validate = (formValues) => {
    const errorObj = {}
    if (!formValues['emailId']) {
        errorObj['emailId'] = 'Required'
    }
    if (formValues['emailId'] && !validateEmail(formValues['emailId'])) {
        errorObj['emailId'] = 'Please enter a valid email id'
    }
    if (!formValues['firstName']) {
        errorObj['firstName'] = 'Required'
    }
    if (!formValues['lastName']) {
        errorObj['lastName'] = 'Required'
    }
    if (!formValues['password']) {
        errorObj['password'] = 'Required'
    }
    if (!formValues['confirmPassword']) {
        errorObj['confirmPassword'] = 'Required'
    }
    if (formValues['password'] && formValues['confirmPassword'] && formValues['confirmPassword'] !== formValues['password']) {
        errorObj['confirmPassword'] = 'Password and Confirm Password are not matching'
    }

    return errorObj
}


const Registration = (props) => {

    const [emailIdAvailable, setEmailIdAvailable] = useState(true)
    const [isLoading, setLoading] = useState(false)

    const formSubmit = async (values, { setSubmitting }) => {
        const { register } = props;
        setSubmitting(true)
        await register(values)
        setSubmitting(false)

    }

    useEffect(() => {

        debouncedEvent = debounceEvent(async (value) => {
            try {
                setLoading(true)
                let response = await checkAvailablity(value)
                setLoading(false)
                console.log("response", response)
                setEmailIdAvailable(response['available'])

            } catch (e) {
                console.log("validateEmail(e.target.value)", e)
            }
        })
    }, [])

    const onEmailIdChange = async (e, cb) => {
        cb(e)

        if (validateEmail(e.target.value)) {
            debouncedEvent && debouncedEvent(e.target.value)
        }
    }

    return (
        <Form initialValues={initialValues}
            onSubmit={formSubmit}
            validate={values => validate(values)}>
            {
                ({ values, handleChange, handleBlur, touched, errors, isSubmitting }) => {
                    return (
                        <div css={styles.formCon}>
                            <div css={styles.header}>
                                <h2>{'Sign Up'}</h2>
                            </div>
                            <div css={styles.inputCon}>
                                <Input label={'Email ID'}
                                    type={"email"}
                                    name={'emailId'}
                                    value={values['emailId']}
                                    onChange={(e) => onEmailIdChange(e, handleChange)}
                                    onBlur={handleBlur}
                                    error={(Boolean(touched['emailId']) && errors['emailId']) || (!emailIdAvailable && 'User already exists for this email id')}
                                />
                                <span css={styles.loader}>
                                {isLoading ? <CircularProgress size={15}/> : ''}
                                </span>
                            </div>
                            <div css={styles.inputCon}>
                                <Input label={'First Name'}
                                    type={"text"}
                                    name={'firstName'}
                                    value={values['firstName']}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={Boolean(touched['firstName']) && errors['firstName']}
                                />
                            </div>
                            <div css={styles.inputCon}>
                                <Input label={'Last Name'}
                                    type={"text"}
                                    name={'lastName'}
                                    value={values['lastName']}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={Boolean(touched['lastName']) && errors['lastName']}
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
                            <div css={styles.inputCon}>
                                <Input label={'Confirm Password'}
                                    type={"password"}
                                    name={'confirmPassword'}
                                    value={values['confirmPassword']}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={Boolean(touched['confirmPassword']) && errors['confirmPassword']}
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
    )

}

export default Registration