import "./Css/AnimeCard.css"
import PropTypes from "prop-types";
const AnimeCard = ({name,src}) =>{
    return (
      <>
      <div className="aFullCard">
        <img className="aCardImg" src={src}></img>
        <div className="aCardInfo">
        {name}
        </div>
      </div>
      </>
    );
  }
  AnimeCard.propTypes = {
    src: PropTypes.string,
    name: PropTypes.string,


}
AnimeCard.defaultProps = {
    src: "",
    name: "anime adı",
}
  
  export default AnimeCard ;
  
  