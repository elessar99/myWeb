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
          <div>login/register</div>
          {false&&(<div>user</div>)}
        </div>
      </div>
      </>
    );
  }
  
  export default AnimeHead ;
  
  