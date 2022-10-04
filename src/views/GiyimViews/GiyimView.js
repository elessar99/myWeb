import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setKey } from '../../store/reducers/bestT/sepetActions';
import './Giyim.css';
import PageItem from './PageItem';
import PageOne from './PageOne';
import PageSepet from './PageSepet';
import PageThree from './PageThree';
import PageTwo from './PageTwo';
const GiyimView = () =>{
  const dispatch=useDispatch()
  const pageKey=useSelector(state=>state.key)
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
          <div className='nbBtn' onClick={()=>{dispatch(setKey(1))}}>Yeni</div>
          <div className='nbBtn' onClick={()=>{dispatch(setKey(2))}}>Erkek</div>
          <div className='nbBtn' onClick={()=>{dispatch(setKey(3))}}>Kadın</div>
          <div className='nbBtnIcon' onClick={()=>{dispatch(setKey(4))}}><img className='icon' src={require("../../img/sepet.png")}></img></div>
        </div> 
      </div>  
    </div>
          {/* ---- */}
    <div className='views'>
    {pageKey.key===1 && (<PageOne/>)}
    {pageKey.key===2 && (<PageTwo/>)}
    {pageKey.key===3 && (<PageThree/>)}
    {pageKey.key===4 && (<PageSepet/>)}
    {pageKey.key===5 && (<PageItem/>)}
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

