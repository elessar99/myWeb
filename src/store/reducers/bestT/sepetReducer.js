import { initialState } from "./sepetState";

function itemReducer(state=initialState,action){
    switch (action.type) {
        case "SET_ITEM":
            return{items:action.payload}
        case "ADD_ITEM":
            return{}
        default:
            return state
    }
}
export default itemReducer
