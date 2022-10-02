import './Card.css';
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from 'react-redux';
import { addItem, setİtem } from '../../store/reducers/bestT/sepetActions';

const Card  = ({name,fiyat,Img,imgSrc}) => {
    const items={
        item:Img,
        adet:1,
    }
    const [tests, setTest] = useState();
    let control=true;
    const [sepetAll, setSepetAll] = useState([]);
    const dispatch=useDispatch()
    const sepetState=useSelector(state=>state.sepet)    
    return(
    <>
    <div className='card' onClick={()=>{
        console.log(sepetState,"xxssa")
        if(sepetState !== null ){
            console.log(("girdi"))
          sepetState.map((m)=>{
            if(m.item===items.item){
                m.adet+=1;
                control=false;
            }
        })  
        }else{
            console.log(sepetState)
            dispatch(setİtem(items.item))
            control=false
        }
        if(control){
            dispatch(addItem(items.item))
        }
    
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

