import { useState } from "react";
import { komediState } from "../../../store/reducers/AnimeReducer/KomediState"
import AnimeCard from "./AnimeCard";
import PropTypes from "prop-types";
import "./Css/TypeAnime.css"

const KomediAnime = ({onPageChange,nameChange,srcChange}) =>{
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
              <AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={item.animeName} src={item.animeSrc}/>
              )
            }
            else if (counter>16 && pageKey===2){
              return(
              <AnimeCard onPageChange={(i)=>{onPageChange(i)}} nameChange={(j)=>{nameChange(j)}} srcChange={(k)=>{srcChange(k)}} name={item.animeName} src={item.animeSrc}/>
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
  KomediAnime.propTypes = {
    onPageChange: PropTypes.func,
    nameChange: PropTypes.func,
    srcChange: PropTypes.func,
  }
  KomediAnime.defaultProps = {
    onPageChange: ()=>5,
    nameChange: ()=>null,
    srcChange: ()=>null,
  }
  
  export default KomediAnime ;
  
  