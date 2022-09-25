import Card from './Card';
import './PageO.css';
const PageOne = () =>{
  return (
    <>
    <div>
        <div className='head'>BEST - T</div>
        <div className='headInfo'>
            <div style={{backgroundColor:"yellow",padding:"0.3em 0.6em 0.3em 0.6em"}}>Herkese Uygun Seçenekler</div>
        </div>
    </div>
    <div className='oneImgs'>
        <div><img  className='oneImg' src={require("../../img/img m/m2.jpg")}></img></div>
        <div><img src={require("../../img/img m/m1.jpg")} className='oneImg'></img></div>
        <div><img src={require("../../img/img m/m0.jpg")} className='oneImg'></img></div>
        <div><img src={require("../../img/img m/m3.jpg")} className='oneImg'></img></div>
        <div><img src={require("../../img/img m/m4.jpg")} className='oneImg'></img></div>
        
    </div>
    <div className='fullcards'>
    <h2 style={{display:"flex",justifyContent:"center"}}> yeni ürünler</h2>
    <div className='cards'>
        <Card Img={require("../../img/img k/k1.jpg")}></Card>
        <Card Img={require("../../img/img e/e1.jpg")}></Card>
        <Card Img={require("../../img/img k/k11.jpg")}></Card>
        <Card Img={require("../../img/img k/k2.jpg")}></Card>
        <Card Img={require("../../img/img k/k6.jpg")}></Card>
        <Card Img={require("../../img/img k/k12.jpg")}></Card>
        <Card Img={require("../../img/img e/e11.jpg")}></Card>
        <Card Img={require("../../img/img k/k7.jpg")}></Card>
        <Card Img={require("../../img/img e/e10.jpg")}></Card>
        <Card Img={require("../../img/img e/e12.jpg")}></Card>
        <Card Img={require("../../img/img k/k6.jpg")}></Card>
        <Card Img={require("../../img/img k/k9.jpg")}></Card>

    </div>
    </div>
    <div className='pageInfo'>
        <div className='pageInfoText'>
            <div style={{fontSize:"5em",padding:"0.5em"}}>dev indirim</div>
            <div style={{fontSize:"2em",padding:"0.5em"}}>800 ₺ üstü alışverişe</div>
            <div style={{fontSize:"3em",padding:"0.5em"}}>%35 indirim</div>
        </div>
        <div><img src={require("../../img/img m/m6.jpg")}></img></div>
    </div>
    </>
  );
}

export default PageOne;

