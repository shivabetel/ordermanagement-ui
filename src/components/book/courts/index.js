/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useState } from 'react';
import Court from './court';
import { styles } from './style'

const courts = [1, 2, 3, 4, 5, 6]
const Courts = props => {

    const [courtSelected, setCourtSelected] = useState([])

    const onCourtSelection = (label) => {
        setCourtSelected(label)
    }


    return (
        <>
            <div css={styles.heading}>
                <span>
                    {'Select Court'}
                </span>
            </div>
            <div css={styles.content}>
                {
                    courts.map(courtNo => <Court label={courtNo} onSelection={onCourtSelection} selected={courtNo === courtSelected}/>)
                }
            </div>
        </>
    )

}

export default Courts;

