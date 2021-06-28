/** @jsx jsx */
import { jsx } from '@emotion/core'
import Form from '../../common/form'
import Button from '../../common/button'
import InputComp from '../../common/input'
import { styles } from '../style'
import { getCurrentPathDetails } from '../../../utils/location'
import { Router } from '../../../../routes'

const initialValues = {
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    pincode: '',
    country: ''
}

const validate = (formValues) => {
    const errorObj = {}
    if (!formValues['addressLine1']) {
        errorObj['addressLine1'] = 'Required'
    }
    if (!formValues['addressLine2']) {
        errorObj['addressLine2'] = 'Required'
    }
    if (!formValues['city']) {
        errorObj['city'] = 'Required'
    }
    if (!formValues['state']) {
        errorObj['state'] = 'Required'
    }
    if (!formValues['pincode']) {
        errorObj['pincode'] = 'Required'
    }
    if (!formValues['country']) {
        errorObj['country'] = 'Required'
    }

    return errorObj
}

const Create = props => {

    const {  cancelClickHandler = () => {} } = props

    const formSubmit = async (values, { setSubmitting }) => {
        const { createHandler } = props
        setSubmitting(true)
        await createHandler(values)
        setSubmitting(false)
    }


    return (
        <div>
            <Form initialValues={initialValues}
                onSubmit={formSubmit}
                validate={values => validate(values)}>
                {
                    ({ values, handleChange, handleBlur, touched, errors, isSubmitting, }) => {
                        return (
                            <div css={styles.formCon}>
                                <div css={styles.header}>
                                    <h2>{'Add New Shipping Address'}</h2>
                                </div>
                                <div css={styles.inputCon}>
                                    <InputComp label={'Address Line1'}
                                        name={'addressLine1'}
                                        value={values['addressLine1']}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={Boolean(touched['addressLine1']) && errors['addressLine1']}
                                    />
                                </div>
                                <div css={styles.inputCon}>
                                    <InputComp label={'Address Line2'}
                                        name={'addressLine2'}
                                        value={values['addressLine2']}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={Boolean(touched['addressLine2']) && errors['addressLine2']}
                                    />
                                </div>
                                <div css={styles.inputCon}>
                                    <InputComp label={'City'}
                                        name={'city'}
                                        value={values['city']}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={Boolean(touched['city']) && errors['city']}
                                    />
                                </div>
                                <div css={styles.inputCon}>
                                    <InputComp label={'State'}
                                        name={'state'}
                                        value={values['state']}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={Boolean(touched['state']) && errors['state']}
                                    />
                                </div>
                                <div css={styles.inputCon}>
                                    <InputComp label={'Pincode'}
                                        name={'pincode'}
                                        value={values['pincode']}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={Boolean(touched['pincode']) && errors['pincode']}
                                    />
                                </div>
                                <div css={styles.inputCon}>
                                    <InputComp label={'Country'}
                                        name={'country'}
                                        value={values['country']}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={Boolean(touched['country']) && errors['country']}
                                    />
                                </div>
                                <div>
                                    <Button type="submit"
                                        isLoading={isSubmitting} />

                                    <Button label="cancel"
                                        buttonStyle={styles.cancelButton}
                                        buttonClickHandler={cancelClickHandler} />
                                </div>
                            </div>
                        )
                    }
                }
            </Form>
        </div>
    )
}

export default Create