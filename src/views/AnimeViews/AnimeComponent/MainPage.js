import AnimeCard from "./AnimeCard";
import "./Css/AnimeMainPage.css"
import { animeListState } from "../../../store/reducers/AnimeReducer/AnimeListState"
import { useState } from "react";


const MainPage = () =>{
  let counter = 0;
  const [pageKey, setPageKey] = useState(1);
  const [state, setstate] = useState(animeListState);
    return (
      <>
      <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <div className="aMainPage">
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
          <button style={{margin:"1em"}} onClick={()=>{setPageKey(2)}}>2</button>
        </div>
      </div>
      </>
    );
  }
  
  export default MainPage ;
  
  