
function itemReducer(state=null,action){
    switch (action.type) {
        case "SET_ITEM":
            return[
                {
                    item:action.payload,
                    adet:1
                } 
            ]
        case "ADD_ITEM":
            return[
                ...state,
                {
                    item:action.payload,
                    adet:1
                } 
            ]
        case "UP_ITEM":
            return state.map((i)=>{
                if(i.item===action.payload){
                    i.adet=i.adet+1
                }
            })
        case "DOWN_ITEM":
            state.map((i)=>{
                if(i.item===action.payload){
                    i.adet=i.adet-1
                    
                }
            })
            return state
            // let i = state.map(x => x.item).indexOf(action.payload)
            // if(state[i].adet<=1){
            //     return state.slice(0,i).concat(state.slice(i + 1))
            // }
            // else{
            //     return 
            // } -------------
              
            // return state.map((i)=>{
            //     if(i.item===action.payload){
            //         if(i.adet<=1){
            //         let index = state.map(x => x.item).indexOf(i.item)
            //         state.slice(0,index).concat(state.slice(index + 1))
            //         }else{
            //             i.adet=i.adet-1
            //         }
            //     }
            // })
        case "DEL_ITEM":
            let index = state.map(x => x.item).indexOf(action.payload)
            return (
                state.slice(0,index).concat(state.slice(index + 1))
              )
        default:
            return state
    }
}
export default itemReducer
