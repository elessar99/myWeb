import './Card.css';
import React from "react";
import PropTypes from "prop-types";
const Card  = ({name,fiyat,Img}) => {
    return(
    <>
    <div className='card'>
        <img className='cardImg' src={Img}></img>
        <div className='cardInfo'>{name}</div>
        <div className='cardInfo'>{fiyat}</div>
    </div>
    </>
    );
}
Card.propTypes = {
    Img: PropTypes.string,
    name: PropTypes.string,
    fiyat: PropTypes.string,


}
Card.defaultProps = {
    Img: "",
    name: "ürün adı",
    fiyat: "120 ₺"
}
export default Card;

