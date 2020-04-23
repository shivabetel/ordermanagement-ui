/** @jsx jsx */
import { jsx } from '@emotion/core'
import { styles } from './style'


const Court = props => {

    const { label = '', selected = false } = props;
    const onSelectionClick = () => {
        const { onSelection } = props;
        onSelection(label)
    }
    

    const listItemStyle = Object.assign({}, styles.listItem, selected ? styles.selected : ' ')
    return (
        <div css={listItemStyle} onClick={onSelectionClick}>
            <span>{label}</span>
        </div>
    )
}

export default Court