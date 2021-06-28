
export function trimFirstChar(inputString = '') {
    if (inputString) { return inputString.substring(1, inputString.length) }
    return (inputString)
}

export function trimLastChar(inputString = '') {
    if (inputString) { return inputString.substring(0, inputString.length - 1) }
    return (inputString)
}

export function isLastChar(inputString = '', charToCheck) {
    if (inputString) { return (inputString.substring(inputString.length - 1, inputString.length) === charToCheck) }
    return false
}

export function isFirstChar(inputString = '', charToCheck) {
    if (inputString) { return (inputString.substring(0, 1) === charToCheck) }
    return false
}