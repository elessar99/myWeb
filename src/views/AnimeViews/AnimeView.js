import AnimeCard from './AnimeComponent/AnimeCard';
import AnimeHead from './AnimeComponent/AnimeHead';
import AnimeType from './AnimeComponent/AnimeType';
import FoodAnime from './AnimeComponent/Food';
import MainPage from './AnimeComponent/MainPage';
import TopAnimeList from './AnimeComponent/TopAnimeList';
import './AnimeView.css';
const AnimeView = () =>{
  return (
    <>
    <div className="fullAnimePage">
    <AnimeHead></AnimeHead>
    <TopAnimeList/>
    <AnimeType/>
    <div><MainPage/></div>
      <div>2</div>
    </div>
    <div><FoodAnime/></div>
    </>
  );
}

export default AnimeView;

