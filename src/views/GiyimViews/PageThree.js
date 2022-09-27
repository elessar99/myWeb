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
        <Card Img={process.env.REACT_APP_URL_K1}></Card>
        <Card Img={process.env.REACT_APP_URL_K2}></Card>
        <Card Img={process.env.REACT_APP_URL_K3}></Card>
        <Card Img={process.env.REACT_APP_URL_K4}></Card>
        <Card Img={process.env.REACT_APP_URL_K5}></Card>
        <Card Img={process.env.REACT_APP_URL_K6}></Card>
        <Card Img={process.env.REACT_APP_URL_K7}></Card>
        <Card Img={process.env.REACT_APP_URL_K8}></Card>
        <Card Img={process.env.REACT_APP_URL_K9}></Card>
        <Card Img={process.env.REACT_APP_URL_K10}></Card>
        <Card Img={process.env.REACT_APP_URL_K11}></Card>
        <Card Img={process.env.REACT_APP_URL_K12}></Card>

        </div>
    </div>
    </>
  );
}

export default PageThree;

