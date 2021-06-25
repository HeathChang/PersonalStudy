import './App.css';
import React,{ useEffect, useState } from 'react';
import Movie from './components/Movie'
import MovieForm from './components/MovieForm';
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  const [movies, setMovies] = useState([]);

  const removeMovie=(id)=>{
    setMovies(movies.filter(movie=>{
      return movie.id != id;
    }))
  }
  const renderMovies = movies.length
  ? movies.map(movie=>{
    return(
      <Movie movie={movie} key={movie.id} removeMovie={removeMovie}/>
    )
  })
  : "추가된 영화가 없습니다. ";
  const addMovie=(movie)=>{
    //movies.push() 화면 변화 X: const 배열은 변화한다고 reRendering 되지 않음.  (state아님)
    setMovies([
      ...movies,
      movie
    ])
  }


  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/" exact> 
            <h1>HOME</h1>
          </Route>

          <Route path="/movies"> 
            <h1>MOVIE LIST</h1>
            <MovieForm addMovie={addMovie} />
            {renderMovies}
          </Route>

          <Route path="/users">
            <h1>USERS</h1>
          </Route>


        </Switch>
      </div>
    </Router>

  );
}

export default App;
