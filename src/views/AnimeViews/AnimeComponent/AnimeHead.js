import { useCallback, useRef, useState } from "react";
import { useClickOutside } from "../useClickOutside";
import "./Css/AnimeHead.css"
const AnimeHead = () =>{
  const handleClick = useCallback(()=>{
    setDropDown((c)=> !c)
  },[])
  const refDropdown = useRef(null);
  const [dropDown, setDropDown] = useState(false);
  useClickOutside(refDropdown, ()=> setDropDown(false));
    return (
      <>
      <div className="animeHead">
        <div className="aLogo"><img className="aLogoImg" src={require("../img/logo/animeLogo.png")}></img></div>
        <div className="aHeadBtn">
            <div ref={refDropdown}>
            <div onClick={handleClick}>anime türleri</div>
              <div className={dropDown ? "animeTypeDropDown show":"animeTypeDropDown"}>
                <div className="aDropDownBtns">Aksiyon</div>
                <div className="aDropDownBtns">Doğaüstü Güç</div>
                <div className="aDropDownBtns">Komedi</div>
              </div>
            </div>
            <div>anime haber</div>
            <div>myAnime</div>
        </div>
        <div className="aLogReg">
          <div style={{display:"flex"}}>
            <div className="aLogRegBtn">
              giriş yap
            </div>
            <div className="aLogRegBtn">
              üye ol
            </div>
          </div>
          {false&&(<div>user</div>)}
        </div>
      </div>
      </>
    );
  }
  
  export default AnimeHead ;
  
  