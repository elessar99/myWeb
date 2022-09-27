import { initialState } from "./sepetState";

function itemReducer(state=initialState,action){
    switch (action.type) {
        case "SET_ITEM":
            return{items:action.payload}
        default:
            return state
    }
}
export default itemReducer