import Card from './Card';
import './PageT.css';
const PageThree = () =>{
  return (
    <>
    <div>
        <div className='headThree'>
        kadın Modelleri
        </div>
        <div className='cardsThree'>
        <Card Img={require("../../img/img k/k1.jpg")}></Card>
        <Card Img={require("../../img/img k/k2.jpg")}></Card>
        <Card Img={require("../../img/img k/k3.jpg")}></Card>
        <Card Img={require("../../img/img k/k4.jpg")}></Card>
        <Card Img={require("../../img/img k/k5.jpg")}></Card>
        <Card Img={require("../../img/img k/k6.jpg")}></Card>
        <Card Img={require("../../img/img k/k7.jpg")}></Card>
        <Card Img={require("../../img/img k/k8.jpg")}></Card>
        <Card Img={require("../../img/img k/k9.jpg")}></Card>
        <Card Img={require("../../img/img k/k10.jpg")}></Card>
        <Card Img={require("../../img/img k/k11.jpg")}></Card>
        <Card Img={require("../../img/img k/k12.jpg")}></Card>

        </div>
    </div>
    </>
  );
}

export default PageThree;

