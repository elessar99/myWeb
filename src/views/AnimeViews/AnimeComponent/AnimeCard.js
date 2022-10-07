import "./Css/AnimeCard.css"
const AnimeCard = () =>{
    return (
      <>
      <div className="aFullCard">
        <img className="aCardImg" src={require("../img/attackontitan.jpg")}></img>
        <div className="aCardInfo">
        shingeki no kyojin
        </div>
      </div>
      </>
    );
  }
  
  export default AnimeCard ;
  
  