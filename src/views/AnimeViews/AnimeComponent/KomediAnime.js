import { useState } from "react";
import { komediState } from "../../../store/reducers/AnimeReducer/KomediState"
import AnimeCard from "./AnimeCard";

import "./Css/TypeAnime.css"

const KomediAnime = () =>{
  let counter = 0;
  const [pageKey, setPageKey] = useState(1);
  const [state, setstate] = useState(komediState);
    return (
      <>
      <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
          <div className="aTypePage">
          {state.map((item)=>{
            counter++;
            if(counter<17 && pageKey===1){
              return(
              <AnimeCard name={item.animeName} src={item.animeSrc}/>
              )
            }
            else if (counter>16 && pageKey===2){
              return(
              <AnimeCard name={item.animeName} src={item.animeSrc}/>
              )
            }
                   
          })}
        </div>
        <div>
          <button style={{margin:"1em"}} onClick={()=>{setPageKey(1)}}>1</button>
        </div>
      </div>
      </>
    );
  }
  
  export default KomediAnime ;
  
  