import { useState } from 'react';
import Card from './Card';
import './PageS.css';
const PageSepet = () =>{
    const [code, setCode] = useState(false);
    const [note, setNote] = useState(false);
  return (
    <>
    <div className='fullPage'>
        <div className='sepetFull'>
            <div>alışveriş sepetim</div>
            <hr />
            <div className='sepetCard'>
                <div className='sepetItem'>
                    <img src={require("../../img/img k/k1.jpg")} className='itemImg'></img>
                    <div className='itemInfo'>
                    ürün adı <br/> 120 ₺
                    </div>
                </div>
                <div className='itemDel'>
                    X sil
                </div>
            </div>
            <hr />
            <div className='sepetInfo'>
                <div className='sInfo' onClick={()=>{setCode(!code)}}>Bir promosyon kodu girin</div>
                {code && (<input></input>)}
                <div className='sInfo' onClick={()=>{setNote(!note)}}>Bir not ekle</div>
                {note && (<textarea></textarea>)}
            </div>
        </div>
        <div> 
            <div>Sipariş Özeti</div>
            <div>
                <div>
                    <div>
                    Ara Toplam
                    </div>
                    <div>
                    300,00₺
                    </div>
                </div>
                <div>Teslimat</div>
                <input></input>
            </div>
            <div>
                <div>Toplam</div>
                <div> 300 ₺</div>
            </div>
            <div>
                <button>ödeme</button>
            </div>
        </div>
    </div>
    </>
  );
}

export default PageSepet;

