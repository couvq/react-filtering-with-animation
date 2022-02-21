import './App.css';
import { useState, useEffect } from 'react';
import Movie from './Movie';
import Filter from './Filter';

function App() {

  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0); // set to 0 (all?) initially bc api uses numbers to represent a genre, comedy is 35, action is 28

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=28d9081b9ba215829d7884fa22c3acc2&language=en-US&page=1');

    const movies = await data.json();
  
    setPopular(movies.results);
    setFiltered(movies.results);
  }

  return (
    <div className="App">
      <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
      <div className='popular-movies'>
        {filtered.map(movie => {
          return <Movie key={movie.id} movie={movie} />
        })}
      </div>
    </div>
  );
}

export default App;
