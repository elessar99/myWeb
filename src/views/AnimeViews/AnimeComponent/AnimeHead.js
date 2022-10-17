import { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAksiton, setAnimeKey, setKomedi } from "../../../store/reducers/AnimeReducer/animeTypeAction";
import { useClickOutside } from "../useClickOutside";


import { dogaustuState } from "../../../store/reducers/AnimeReducer/DogaustuState"
import { komediState } from "../../../store/reducers/AnimeReducer/KomediState"
import { aksiyonState } from "../../../store/reducers/AnimeReducer/AksiyonState"

import PropTypes from "prop-types";
import "./Css/AnimeHead.css"
const AnimeHead = ({onPageChange,onLogReg}) =>{
  const handleClick = useCallback(()=>{
    setDropDown((c)=> !c)
  },[])
  const animeState=useSelector(state=>state.animeType)
  const dispatch = useDispatch
  const refDropdown = useRef(null);
  const [dropDown, setDropDown] = useState(false);
  useClickOutside(refDropdown, ()=> setDropDown(false));
    return (
      <>
      <div className="animeHead">
        <div className="aLogo" onClick={()=>{onPageChange(1)}}><img className="aLogoImg" src={require("../img/logo/animeLogo.png")}></img></div>
        <div className="aHeadBtn">
            <div ref={refDropdown}>
            <div onClick={handleClick}>anime türleri</div>
              <div className={dropDown ? "animeTypeDropDown show":"animeTypeDropDown"}>
                <div className="aDropDownBtns" onClick={()=>{onPageChange(2)}}>Aksiyon</div>
                <div className="aDropDownBtns" onClick={()=>{onPageChange(3)}}>Doğaüstü Güç</div>
                <div className="aDropDownBtns" onClick={()=>{onPageChange(4)}}>Komedi</div>
              </div>
            </div>
            <div>anime haber</div>
            <div>myAnime</div>
        </div>
        <div className="aLogReg">
          <div style={{display:"flex"}}>
            <div className="aLogRegBtn" onClick={()=>{onLogReg(1)}}>
              giriş yap
            </div>
            <div className="aLogRegBtn" onClick={()=>{onLogReg(2)}}>
              üye ol
            </div>
          </div>
          {false&&(<div>user</div>)}
        </div>
      </div>
      </>
    );
  }
  AnimeHead.propTypes = {
    onPageChange: PropTypes.func,
    onLogReg: PropTypes.func,


}
AnimeHead.defaultProps = {
    onPageChange: ()=> null,
    onLogReg:  ()=> null,
}
  
  export default AnimeHead ;
  
  