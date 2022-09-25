import Card from './Card';
import './PageT.css';
const PageTwo = () =>{
  return (
    <>
    <div>
        <div className='headTwo'>
        Erkek Modelleri
        </div>
        <div className='cardsTwo'>
        <Card Img={require("../../img/img e/e1.jpg")}></Card>
        <Card Img={require("../../img/img e/e2.jpg")}></Card>
        <Card Img={require("../../img/img e/e3.jpg")}></Card>
        <Card Img={require("../../img/img e/e4.jpg")}></Card>
        <Card Img={require("../../img/img e/e5.jpg")}></Card>
        <Card Img={require("../../img/img e/e6.jpg")}></Card>
        <Card Img={require("../../img/img e/e7.jpg")}></Card>
        <Card Img={require("../../img/img e/e8.jpg")}></Card>
        <Card Img={require("../../img/img e/e9.jpg")}></Card>
        <Card Img={require("../../img/img e/e10.jpg")}></Card>
        <Card Img={require("../../img/img e/e11.jpg")}></Card>
        <Card Img={require("../../img/img e/e12.jpg")}></Card>

        </div>
    </div>
    </>
  );
}

export default PageTwo;

