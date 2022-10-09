import "./Css/AnimeHead.css"
const AnimeHead = () =>{
    return (
      <>
      <div className="animeHead">
        <div className="aLogo"><img className="aLogoImg" src={require("../img/logo/animeLogo.png")}></img></div>
        <div className="aHeadBtn">
            <div>anime türleri</div>
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
  
  