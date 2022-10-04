import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delItem, downItem, upItem } from '../../store/reducers/bestT/sepetActions';
import Card from './Card';
import './PageS.css';
const PageSepet = () =>{
    const [code, setCode] = useState(false);
    const [note, setNote] = useState(false);
    const [testimat, setTestimat] = useState(0);
    let adet=0;
    const [sepetAll, setSepetAll] = useState([]);
    const dispatch=useDispatch()
    const sepetState=useSelector(state=>state.sepet)  
  return (
    <>
    <div className='fullPage'>
        <div className='sepetFull'>
            <div className='sepetHead'>alışveriş sepetim</div>
            <hr />
            
                <div className='allCards'>
                {sepetState !== null && (sepetState.map((m)=>{
                    adet+=m.adet
                    return(
                        <div className='sepetCard'>
                        <div className='sepetItem'>
                        <img className='itemImg' src={m.item}></img>
                        <div className='itemInfo'>
                    ürün adı <br/> 120 ₺
                    </div>
                    <div className='itemInfo'><button onClick={()=>{
                        dispatch(downItem(m.item))
                    }}>-</button> <div style={{margin:"0.5em"}}> {m.adet} </div><button onClick={()=>{
                        dispatch(upItem(m.item))
                    }}>+</button>
                    </div>
                </div>
                <div className='itemDel' onClick={()=>{
                    dispatch(delItem(m.item))
                }}>
                    X sil
                </div><hr />
                </div>
            
                    )
                }))}
                    
                </div>
            
            <div className='sepetInfo'>
                <div className='sInfo' onClick={()=>{setCode(!code)}}>Bir promosyon kodu girin</div>
                {code && (<input></input>)}
                <div className='sInfo' onClick={()=>{setNote(!note)}}>Bir not ekle</div>
                {note && (<textarea></textarea>)}
            </div>
        </div>
        <div> 
            <div className='sepetHead'>Sipariş Özeti</div>
            <hr/>
            <div className='siparisAra'>
                <div className='araToplam'>
                    <div>
                    Ara Toplam
                    </div>
                    <div>
                    {adet*120},00₺
                    </div>
                </div>
                <label>Testimat bölgesi</label>
                <select onChange={(e)=>{
                    console.log(e.target)
                        setTestimat(e.target.value)
                }}>
                    <option value={20}>Ankara</option>
                    <option value={30}>İzmir</option>
                    <option value={10}>İstanbul</option>
                    <option value={40}>Antalya</option>
                    <option value={0} selected>...</option>
                </select>
            </div>
            <hr />
            <div className='toplam'>
                <div> Toplam</div>
                <div> {adet*120 + testimat*1} ₺</div>
            </div>
            <div>
                <div className='siparisBtn' onClick={()=>{
                    alert("şuanda sistem calışmamaktadır!!!")
                }}>ödeme</div>
            </div>
        </div>
    </div>
    </>
  );
}

export default PageSepet;

