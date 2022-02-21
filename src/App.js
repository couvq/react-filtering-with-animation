import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=28d9081b9ba215829d7884fa22c3acc2&language=en-US&page=1');

    const movies = await data.json();
  
    setPopular(movies.results);
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
