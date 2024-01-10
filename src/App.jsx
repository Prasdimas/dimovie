import { useEffect, useState } from 'react'
import './App.css'
import searchicon from './search.svg'
import Cards from './Cards';
// Here is your key: 69457f09e952f83b06116aaf717225aa
// Token API KEY : eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTQ1N2YwOWU5NTJmODNiMDYxMTZhYWY3MTcyMjVhYSIsInN1YiI6IjY1NzA2ZTEzMzgzZGYyMDBlYjI2ZTBiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aOuA8KjC4M5og1_F7y4lTVMk_WlcC-74M16s33fWcQc


const api = 'http://www.omdbapi.com/?apikey=cc37cdc4'

function App() {
  const [cari,setcari] = useState('');
  const searchMovie = async (title) => {
    try {
      const apiKey = '69457f09e952f83b06116aaf717225aa';
      const apiUrl = 'https://api.themoviedb.org/3/search/movie';
  
      const response = await fetch(`${apiUrl}?query=${encodeURIComponent(title)}&api_key=${apiKey}`);
      const data = await response.json();
      console.log(data.results);
      setfil(data.results);
    } catch (error) {
      console.error('Movie ridak ditemukan:', error);
    }
  };
  const [fil,setfil] = useState([]);


  const movie = {
    "adult": false,
    "backdrop_path": "/en971MEXui9diirXlogOrPKmsEn.jpg",
    "genre_ids": [
        28,
        12,
        35
    ],
    "id": 293660,
    "original_language": "en",
    "original_title": "Deadpool",
    "overview": "The origin story of former Special Forces operative turned mercenary Wade Wilson, who, after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.",
    "popularity": 94.904,
    "poster_path": "/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg",
    "release_date": "2016-02-09",
    "title": "Deadpool",
    "video": false,
    "vote_average": 7.607,
    "vote_count": 29135
};

  useEffect(()=>{
    searchMovie("Deadpool");
  },[])
  return (
    <>
     <div className='app'>
        <h1>Dimovie</h1>
        <div className="search">
          <input placeholder='Pencarian Movie' 
          value={cari} onChange={(e)=> setcari(e.target.value)}
          type="text" />
          <img src={searchicon} alt="search" onClick={() => searchMovie(cari)}/>
        </div>
        {fil?.length > 0 ? (
  <div className="container">
    {fil.map((movie) => (
      <Cards key={movie.id} movie={movie} />
    ))}
  </div>
) : (
  <div className="empty">
    <h2>Tidak ditemukan</h2>
  </div>
)}

     </div>
    </>
  )
}

export default App
