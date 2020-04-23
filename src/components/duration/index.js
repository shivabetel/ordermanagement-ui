/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useState } from 'react'
import { styles } from './style'


const Duration = props => {

    const [ value, setValue ] = useState(1);

    const onIncrementClick = () => {
        
        setValue(value + 1)
    }

    const onDecrementClick = () => {
        value !== 1 ? setValue(value - 1) : ''
    }


    return (
        <div>
            <div css={styles.heading}>
                <span>{'Duration'}</span>
            </div>
            <span css={styles.decrement} onClick={onDecrementClick}> - </span>
            <span css={styles.value}> { value === 1 ? ' 60 min ' : value.toString().concat(" hrs ") }</span>
            <span css = { styles.increment} onClick={onIncrementClick}> + </span>
            
        </div>
    )
}

export default Duration;