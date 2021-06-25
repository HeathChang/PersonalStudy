import './App.css';
import React,{ useEffect, useState } from 'react';
import Movie from './components/Movie'

function App() {
  const [movieTitle,setMovieTitle]= useState("");
  const [movieYear,setMovieYear]= useState("");
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
  useEffect(()=>{
    console.log("render");
  })

  const renderMovies = movies.map(movie=>{
    return(
      <Movie movie={movie} key={movie.title}/>
    )
  });
  const addMovie=(event)=>{
    event.preventDefault();
    //movies.push() 화면 변화 X: const 배열은 변화한다고 reRendering 되지 않음.  (state아님)
    setMovies([
      ...movies,
      /*
        →spread operator
        객체나 배열을 사용할때 안에 내용 빼오기 
        eg)
        a = { b: 1, c: 2 }
        b = {...a}
        이렇게 하고 b를 출력하면
        b= {b:1, c:2}
      */
      {
      title: movieTitle,
      year: movieYear,
    }])
    //입력후 삭제하기. 
    setMovieTitle("");
    setMovieYear("");
  }


  return (
    <div className="App">
      <h1>Heath Chang</h1>
      <form onSubmit={addMovie}>
        <input
          type="text"
          value={movieTitle} //입력시 값이 변경
          placeholder="영화제목"
          onChange={e=>setMovieTitle(e.target.value)}
        />
        <input
          type="text"
          value={movieYear} //입력시 값이 변경
          placeholder="개봉년도"
          onChange={e=>{setMovieYear(e.target.value)}}
        />
        <button type ="submit"> 영화 추가</button>  
      </form>
      {renderMovies}
    </div>

  );
}

export default App;
