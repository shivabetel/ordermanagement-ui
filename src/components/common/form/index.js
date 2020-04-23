import React, { useState } from 'react'

const Form = props => {
    const { children, initialValues = {}, validate, initialErrors = {} } = props
    const [values, setValues] = useState(initialValues)
    const [touched, setTouched] = useState({})
    const [ errors, setErrors ] = useState(initialErrors)

    const [ isSubmitting, setSubmitting ] = useState(false)

    const handleChange = (e) => {
       setValues({
           ...values,
           [e.target.name]: e.target.value
       })
    }

    const handleBlur = (e) => {
       
        
        const returnedErrors = validate(values);

        setTouched({
            ...touched,
            [e.target.name]: true
        })

        setErrors({
            ...errors,
            [e.target.name]: returnedErrors[e.target.name]
        })
    }


    const handleSubmit = (e) => {
        const { onSubmit = () => {}, validate } = props
        e.preventDefault()
        const touchedObj = {}
        Object.keys(initialValues).forEach(key => touchedObj[key] = true)
        setTouched({
            ...touched,
            ...touchedObj
            
        })
        const returnedErrors = validate(values)
        setErrors({
            ...returnedErrors
        })
        
        
        if(Object.keys(returnedErrors).length === 0)
           onSubmit(values, {setSubmitting});
    }
    return (
        <form onSubmit={handleSubmit}>
            {
                children({
                    values,
                    handleChange,
                    handleBlur,
                    touched,
                    errors,
                    isSubmitting
                })
            }
        </form>
    )


}


export default Form