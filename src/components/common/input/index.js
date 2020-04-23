/** @jsx jsx */
import { jsx } from '@emotion/core'
import { styles } from './style'


const Input = props => {

    const { type = 'text', label, value, onChange, onBlur = () => {},  name = '', required = false, error } = props;

    console.log("error",error)

    const inputStyle = error ? Object.assign({}, styles.input, styles.errorBorder) : styles.input

    return (
        <>
            <div css={styles.labelCon}>
                <label htmlFor={name} css={styles.label}>{label}</label>
                {  error && <span css={styles.errorSpan}>{error}</span> }
            </div>
            <div>
            
                <input css={inputStyle}
                    autoComplete="false"
                    required={required}
                    type={type}
                    value={value}
                    name={name}
                    id={name}
                    onChange={onChange} 
                    onBlur={onBlur}/>
               
            </div>

        </>
    )
}

export default Input;