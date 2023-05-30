export default function counterReducer(state, action) {
    //reducer take in 2 parameters
    //first param is the state object
    //second param is the action object from dispatch

    //switch case matches action.type to set state with a return
    switch (action.type) {
        case "RESET":
            // console.log(action.data)  //"Data!!!"
            return 0 //return sets the state
        case 42:
            return 42
        default:  //we do not want to get here
            alert('Not a type')
    }
}
