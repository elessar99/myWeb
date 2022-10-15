import { dogaustuState } from "./DogaustuState"
import { komediState } from "./KomediState"
import { aksiyonState } from "./AksiyonState"

const initialState={
    key: 1
}


function animeKeyReducer(state=initialState,action){
    switch (action.type) {
        case "SET_A_KEY":
            return {key:2}
        default:
            return state
    }
}
export default animeKeyReducer
