const lnamereducer = function clickLastName(state = null, action) {
    switch (action.type) {
        case "Last_Name":
            return action.payload
        default: break;
    }
    return state

}
export default lnamereducer