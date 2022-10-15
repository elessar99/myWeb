
import { dogaustuState } from "./DogaustuState"
import { komediState } from "./KomediState"
import { aksiyonState } from "./AksiyonState"


export const setAksiton=()=>{
    return{
        type:"SET_AKSIYON",
        payload:aksiyonState
    }
}
export const setKomedi=()=>{
    return{
        type:"SET_KOMEDI",
        payload:"komediState"
    }
}
export const setDoga=()=>{
    return{
        type:"SET_DOGA",
        payload:dogaustuState
    }
}
export const setAnimeKey=(key)=>{
    return{
        type:"SET_A_KEY",
        payload:key
    }
}