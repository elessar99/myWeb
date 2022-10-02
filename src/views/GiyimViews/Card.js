import './Card.css';
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from 'react-redux';
import { setİtem } from '../../store/reducers/bestT/sepetActions';

const Card  = ({name,fiyat,Img,imgSrc}) => {
    const items={
        itemSrc:Img,
        itemAdet:1,
    }
    const [tests, setTest] = useState();
    useEffect(() => {
        if(sepetState.items != null){
            sepetState.items.map((item)=>{
                console.log(item)
                if(item.itemSrc===items.itemSrc){
                    console.log("itemı buldum")
                    item.itemAdet+=1;
                    control=false;
                }
                    sepetAll.push(item)
                    console.log(item,"ekledim")
            })
        }
        if(control){
        sepetAll.push(items)
        console.log(items,"ekledimmmmmm")
        }
        dispatch(setİtem(sepetAll))
        console.log(sepetState)
    }, [tests]);
    
    let control=true;
    const [sepetAll, setSepetAll] = useState([]);
    const dispatch=useDispatch()
    const sepetState=useSelector(state=>state.sepet)    
    return(
    <>
    <div className='card' onClick={()=>{tests !== true? setTest(true):setTest(false)}}>
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

