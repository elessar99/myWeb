import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, setİtem } from '../../store/reducers/bestT/sepetActions';
import './PageU.css';
const PageItem = () =>{
    const dispatch = useDispatch();
    const [bilgi, setBilgi] = useState(true);
    const [para, setPara] = useState(false);
    const [gonderim, setGonderim] = useState(false);
    const itemState=useSelector(state=>state.item) 
    const items={
        item:itemState.itemSrc,
        adet:1,
    }
    let control=true;
    const sepetState=useSelector(state=>state.sepet)  
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
        <hr/>
        <p>Ürün Kodu: 000</p>
        <p style={{fontSize:"2em"}}>120 ₺</p>
        <div className='ekleBtn' onClick={()=>{
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
        }}>Sepete Ekle</div>
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
            <div className='infoBlock' onClick={()=>{
                if(para){
                    setPara(false)
                }
                else{
                    setBilgi(false)
                    setGonderim(false)
                    setPara(true)
                }
            }}>
                <div className='infoS'>
                    <div>ÜRÜN VE PARA İADE POLİTİKASI</div>
                    <div>
                        {!para&&(<div style={{fontSize:"1.5em"}}>⋙</div>)}
                        {para&&(<div style={{fontSize:"1.5em"}}>⋘</div>)}
                    </div>
                </div>
                {para&&(<div><p>Bu, bir Ürün ve Para İadesi Politikası. Burası,<br/>
                müşterilerinizin aldıkları ürünlerden memnun<br/>
                kalmamaları durumunda ne yapmaları gerektiğini<br/>
                anlatmak için harika bir yer. Güven yaratmak ve<br/>
                müşterileri rahatça alışveriş yapabileceklerine ikna<br/>
                etmek için net bir iade veya değişim politikanızın<br/>
                olması gerekir.<br/>

                </p></div> )}
            </div> 
            <hr/>
            <div className='infoBlock' onClick={()=>{
                if(gonderim){
                    setGonderim(false)
                }
                else{
                    setBilgi(false)
                    setGonderim(true)
                    setPara(false)
                }
            }}>
                <div className='infoS'>
                    <div>GÖNDERİM BİLGİSİ</div>
                    <div>
                        {!gonderim&&(<div style={{fontSize:"1.5em"}}>⋙</div>)}
                        {gonderim&&(<div style={{fontSize:"1.5em"}}>⋘</div>)}
                    </div>
                </div>
                {gonderim&&(<div><p>Bu, bir gönderim bilgisi. Burası, gönderim<br/>
                    yöntemleri, paketleme ve ücretleriniz hakkında<br/>
                    daha fazla bilgi vermek için harika bir yer. Güven<br/>
                    oluşturmak ve müşterilerinizi sizden rahatça<br/>
                    alışveriş yapabileceklerine ikna etmek için<br/>
                    gönderim politikanız hakkında net bilgi vermeniz<br/>
                    gereklidir.<br/>
                </p></div> )}
            </div> 
        </div>
    </div>
    </div></>
  );
}

export default PageItem;

