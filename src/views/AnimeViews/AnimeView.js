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
import { useState } from 'react';
const AnimeView = () =>{
  const [key, setKey] = useState(1);
  return (
    <>
    <div className="fullAnimePage">
    <AnimeHead></AnimeHead>
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

