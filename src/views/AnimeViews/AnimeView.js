import AnimeCard from './AnimeComponent/AnimeCard';
import AnimeHead from './AnimeComponent/AnimeHead';
import TopAnimeList from './AnimeComponent/TopAnimeList';
import './AnimeView.css';
const AnimeView = () =>{
  return (
    <>
    <div className="fullAnimePage">
    <AnimeHead></AnimeHead>
    <TopAnimeList/>
      <div className='mainPage'>

        <AnimeCard/>
      </div>
      <div>2</div>
    </div>
    </>
  );
}

export default AnimeView;

