import './Giyim.css';
import PageOne from './PageOne';
const GiyimView = () =>{
  return (
    <>
    <div className="header">
      <div className="indirimCode">
      <text>İndirim! Ödeme aşamasında BEST25 kodu ile tüm sitede %25 indirim.</text>
      </div>    
      <div className="headerNav">
        <div className="mainIcon">
        BEST - T
        </div>        
        <div className="navBarBtns">
          <div className='nbBtn'>Yeni</div>
          <div className='nbBtn'>Erkek</div>
          <div className='nbBtn'>Kadın</div>
          <div className='nbBtn'>IC  Giriş  MW</div>
        </div> 
      </div>  
    </div>
          {/* ---- */}
    <div className='views'>
    <PageOne></PageOne>
    </div>
          {/* ---- */}
    <div className='food'>
    <div className='foodTop'>
    <div className='topStart'>
    <tbody>
    <table>
        <tr>
            <th>
            <h2>
              BEST - T
            </h2>
            </th>
        </tr>
        <tr>
            <td>
            best-t@info.com
            </td>
        </tr>
        <tr>
            <td>
            Tel: (321) 123 98 5X
            </td>
        </tr>
    </table>
</tbody>
    </div>
    <div className='topEnd'>
    <div>
      <div className='foodH'>Alışveriş</div>
      <div>
        Yeni<br/>
        Kadın<br/>
        Erkek
      </div>
    </div>
    <div>
    <div className='foodH'>Mağazamız</div>
      <div>
      Hakkında<br/>
      Abone Ol<br/>
      SSS
      </div>
    </div>
    <div>
    <div className='foodH'>Şart ve Koşullar</div>
      <div>
      Mağaza Politikası<br/>
      Gönderim ve İadeler<br/>
      Ödeme Yöntemleri<br/>
      Çerez Politikası
      </div>
    </div>
    </div>
    </div>    
    </div>
    
    </>
  );
}

export default GiyimView;

