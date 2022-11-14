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
  const handleClick2 = useCallback(()=>{
    setDropDown2((k)=> !k)
  },[])
  const handleClick3 = useCallback(()=>{
    setDropDown3((j)=> !j)
  },[])
  const animeState=useSelector(state=>state.animeType)
  const dispatch = useDispatch
  const refDropdown = useRef(null);
  const refDropdown3 = useRef(null);
  const [dropDown, setDropDown] = useState(false);
  const [dropDown2, setDropDown2] = useState(false);
  const [dropDown3, setDropDown3] = useState(false);
  useClickOutside(refDropdown, ()=> setDropDown(false));
  useClickOutside(refDropdown3, ()=> setDropDown3(false));
    return (
      <>
      <div className="animeHead">
        <div className="aLogo" onClick={()=>{onPageChange(1)}}><img className="aLogoImg" src={require("../img/logo/animeLogo.png")}></img></div>
        
        <div className="aHeadBtn">
            <div ref={refDropdown}>
            <div onClick={handleClick} className="aHeadBtns">anime türleri</div>
              <div className={dropDown ? "animeTypeDropDown show":"animeTypeDropDown"}>
                <div className="aDropDownBtns" onClick={()=>{onPageChange(2)}}>Aksiyon</div>
                <div className="aDropDownBtns" onClick={()=>{onPageChange(3)}}>Doğaüstü Güç</div>
                <div className="aDropDownBtns" onClick={()=>{onPageChange(4)}}>Komedi</div>
              </div>
            </div>
            <div className="aHeadBtns">anime haber</div>
            <div className="aHeadBtns">myAnime</div>
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
        <div className="iconBody">
          <div>
            {!dropDown2 && (<img className="iconImg" src={require("../img/menu.png")} onClick={()=>{handleClick2()}}></img>)}
            {dropDown2 && (<img className="iconImg" src={require("../img/close1.png")} onClick={()=>{handleClick2()}}></img>)}
          </div>
          <div className={dropDown2 ? "animeMenuDropDown show":"animeMenuDropDown"}>
              <div>
                <div className="">
                  <div style={{display:"flex",flexDirection:"column"}}>
                    <div className="aLogRegBtnMenu" onClick={()=>{onLogReg(1)}}>
                      giriş yap
                    </div>
                    <div className="aLogRegBtnMenu" onClick={()=>{onLogReg(2)}}>
                      üye ol
                    </div>
                  </div>
                    {false&&(<div>user</div>)}
                </div>
              </div>
              <div ref={refDropdown3}>
            <div onClick={handleClick3} className="aMenuBtn" style={{marginTop:"2em"}}>anime türleri</div>
              <div className={dropDown3 ? "animeTypeDropDownMenu show":"animeTypeDropDownMenu"}>
                <div className="aDropDownBtns" onClick={()=>{onPageChange(2)}}>Aksiyon</div>
                <div className="aDropDownBtns" onClick={()=>{onPageChange(3)}}>Doğaüstü Güç</div>
                <div className="aDropDownBtns" onClick={()=>{onPageChange(4)}}>Komedi</div>
              </div>
              <div className="aMenuBtn" >anime haber</div>
            <div className="aMenuBtn" >myAnime</div>
            </div>
              </div>
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
  
  