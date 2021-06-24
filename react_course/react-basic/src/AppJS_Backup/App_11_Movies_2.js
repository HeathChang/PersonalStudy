import './App.css';
import React from 'react';
import Movie from './components/Movie'
function App() {
  const movieList =[
    { title: "Heath Chang 1",
      year: 2001  
    },
    { title: "Heath Chang 2",
      year: 2002  
    },
    { title: "Heath Chang 3",
      year: 2003 
    }
  ]
  const renderMovies = movieList.map(movie=>{
    return(
      <Movie movie={movie}/>
    )
  });
  return (
    <div className="App">
      <h1>Heath Chang</h1>
      {renderMovies}
    </div>

  );
}

export default App;
