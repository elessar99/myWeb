import { useDispatch, useSelector } from 'react-redux';
import { setAksiton } from '../../store/reducers/AnimeReducer/animeTypeAction';
import AnimeCard from './AnimeComponent/AnimeCard';
import AnimeHead from './AnimeComponent/AnimeHead';
import AnimeType from './AnimeComponent/AksiyonAnime';
import FoodAnime from './AnimeComponent/Food';
import MainPage from './AnimeComponent/MainPage';
import TopAnimeList from './AnimeComponent/TopAnimeList';
import './AnimeView.css';
import AksiyonAnime from './AnimeComponent/AksiyonAnime';
import DogaAnime from './AnimeComponent/DogaAnime';
import KomediAnime from './AnimeComponent/KomediAnime';
import { useEffect, useState } from 'react';
import Popup from './AnimeComponent/Popup';
const AnimeView = () =>{
  const [key, setKey] = useState(1);
  const [logRegKey, setLogRegKey] = useState(0);
  const [control, setControl] = useState(true);
  
  return (
    <>
    {control &&(<Popup onPageChange={logRegKey}/>)}
    {!control &&(<Popup onPageChange={logRegKey}/>)}
    <div className="fullAnimePage">
    <AnimeHead onLogReg={(i)=>{
      setLogRegKey(i)
      setControl(!control)
    }}
    onPageChange={(pKey)=>{
      setKey(pKey)
    }}></AnimeHead>
    <TopAnimeList/>
    {key===1&&(<div><MainPage/></div>)}
    {key===2&&(<div><AksiyonAnime/></div>)}
    {key===3&&(<div><DogaAnime/></div>)}
    {key===4&&(<div><KomediAnime/></div>)}
    </div>
    <div><FoodAnime/></div>
    </>
  );
}

export default AnimeView;

