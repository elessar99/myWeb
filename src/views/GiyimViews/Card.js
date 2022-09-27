import './Card.css';
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from 'react-redux';
import { setİtem } from '../../store/reducers/bestT/sepetActions';

const Card  = ({name,fiyat,Img,imgSrc}) => {
    const [sepetAll, setSepetAll] = useState([]);
    const dispatch=useDispatch()
    const sepetState=useSelector(state=>state.sepet)    
    return(
    <>
    <div className='card' onClick={()=>{
        if(sepetState.items != null){
            sepetState.items.map((item)=>{
                sepetAll.push(item)
            })
        }
        sepetAll.push(Img)
        dispatch(setİtem(sepetAll))
        console.log(sepetState)
    }}>
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

