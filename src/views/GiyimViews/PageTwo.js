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
        <Card Img={process.env.REACT_APP_URL_E1}></Card>
        <Card Img={process.env.REACT_APP_URL_E2}></Card>
        <Card Img={process.env.REACT_APP_URL_E3}></Card>
        <Card Img={process.env.REACT_APP_URL_E4}></Card>
        <Card Img={process.env.REACT_APP_URL_E5}></Card>
        <Card Img={process.env.REACT_APP_URL_E6}></Card>
        <Card Img={process.env.REACT_APP_URL_E7}></Card>
        <Card Img={process.env.REACT_APP_URL_E8}></Card>
        <Card Img={process.env.REACT_APP_URL_E9}></Card>
        <Card Img={process.env.REACT_APP_URL_E10}></Card>
        <Card Img={process.env.REACT_APP_URL_E11}></Card>
        <Card Img={process.env.REACT_APP_URL_E12}></Card>

        </div>
    </div>
    </>
  );
}

export default PageTwo;

