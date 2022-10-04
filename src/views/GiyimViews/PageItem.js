import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './PageU.css';
const PageItem = () =>{
    const dispatch = useDispatch();
    const [bilgi, setBilgi] = useState(true);
    const [para, setPara] = useState(false);
    const [gonderim, setGonderim] = useState(false);
    const itemState=useSelector(state=>state.item)  
  return (
    <><div className='pageUrun'>
    <div className='urunBlock'>
        <div>
            <img src={itemState.itemSrc} className='urunImg'></img>
        </div>
        <div className='urunAciklamasi'><p>
        Bu, bir ürün açıklaması. Burası ürününüzü “satmak” ve alıcıların<br/>
        dikkatini çekmek için harika bir yer. Ürününüzü kısa ve net bir şekilde<br/>
        açıklayın. Özgün anahtar kelimeler kullanın. Üreticinin tanıtımını<br/>
        kullanmak yerine kendi açıklamanızı yazın.<br/>
        </p></div>      
    </div>

    <div className='urunBlock'>
        <div>
        <h1>Ürün Adı</h1>
        <p>Ürün Kodu: 000</p>
        <p style={{fontSize:"2em"}}>120 ₺</p>
        <div className='ekleBtn'>Sepete Ekle</div>
        </div>
        <div>
            <div className='infoBlock' onClick={()=>{
                if(bilgi){
                    setBilgi(false)
                }
                else{
                    setBilgi(true)
                    setGonderim(false)
                    setPara(false)
                }
            }}>
                <div className='infoS'>
                    <div>ÜRÜN BİLGİSİ</div>
                    <div>
                        {!bilgi&&(<div style={{fontSize:"1.5em"}}>⋙</div>)}
                        {bilgi&&(<div style={{fontSize:"1.5em"}}>⋘</div>)}
                    </div>
                </div>
                {bilgi&&(<div><p>Bu, bir ürün ayrıntısı. Burası, ürününüz ile ilgili<br/>
                beden, malzeme, bakım ve temizlik talimatları gibi<br/>
                daha fazla ayrıntı ekleyebileceğiniz, ayrıca bu<br/>
                ürünün neden özel bir ürün olduğunu ve<br/>
                müşterilerinizin ondan nasıl faydalanabileğini<br/>
                açıklayabileceğiniz harika bir yer. Alıcılar, satın<br/>
                almadan önce ürünün ne olduğunu bilmek<br/>
                isterler. Ürününüzü rahat ve güvenli bir şekilde<br/>
                alabilmeleri için olabildiğince çok bilgi verin.<br/>

                </p></div> )}
            </div>    
            <hr/>
            <div></div>
            <hr/>
            <div></div>
        </div>
    </div>
    </div></>
  );
}

export default PageItem;

