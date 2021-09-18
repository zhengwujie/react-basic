function count(preState = 0, action) {
    const {type, data} = action
    switch (type) {
        case 'increment':
            console.log(preState, data)
            return preState + data
        case 'decrement':
            return preState - data
        default:
            return preState
    }
}

export default count
