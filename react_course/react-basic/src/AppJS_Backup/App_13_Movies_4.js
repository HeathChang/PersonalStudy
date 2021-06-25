import './App.css';
import React,{ useEffect, useState } from 'react';
import Movie from './components/Movie'
import MovieForm from './components/MovieForm';

function App() {
  const [movies, setMovies] = useState([    
      { title: "Heath Chang 1",
        year: 2001  
      },
      { title: "Heath Chang 2",
        year: 2002  
      },
      { title: "Heath Chang 3",
        year: 2003 
      }
    ])
  const removeMovie=()=>{
    
  }
  const renderMovies = movies.map(movie=>{
    return(
      <Movie movie={movie} key={movie.title} removeMovie={removeMovie}/>
    )
  });

  const addMovie=(movie)=>{
    //movies.push() 화면 변화 X: const 배열은 변화한다고 reRendering 되지 않음.  (state아님)
    setMovies([
      ...movies,
      movie
    ])
  }


  return (
    <div className="App">
      <h1>Heath Chang</h1>
      <MovieForm addMovie={addMovie} />
      {renderMovies}
    </div>

  );
}

export default App;
