import { debounce } from 'lodash'

const debounceEvent = (cb, debounceTime = 1500) => {
    return debounce(cb, debounceTime)
}

export {
    debounceEvent
}