/** @jsx jsx */
import { jsx } from '@emotion/core'
import { styles } from './style'
import InputDate from '../input-date';
import Duration from '../duration';
import Courts from './courts';
import Button from '../common/button';



const Booking = props => {


    return (
        <div css={styles.mainContainer}>
            <div css={styles.topContainer}>
                <div css={styles.leftCon}>
                    <div css={styles.dateLabel}>
                        <span>
                            {'Select Date'}
                        </span>
                    </div>
                    <InputDate />
                </div>
                <div css={styles.separator}></div>
                <div css={styles.rightCon}>
                    <Duration />

                </div>

            </div>
            <div css={styles.courtsCon}>
                <Courts />
            </div>
            <div css={styles.buttonCon}>
                <Button type={'button'} label={'Add to Cart'} />
            </div>
        </div>
    )
}

export default Booking;