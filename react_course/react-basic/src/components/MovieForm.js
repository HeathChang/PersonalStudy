import React,{ useEffect, useState } from 'react';

const MovieForm=({addMovie})=>{
  const [movieTitle,setMovieTitle]= useState("");
  const [movieYear,setMovieYear]= useState("");

  const resetForm= ()=>{
    setMovieTitle("");
    setMovieYear("");
  }
  const onSubmit=(event)=>{
    event.preventDefault();
    addMovie({
      title: movieTitle,
      year: movieYear,
    })
    resetForm();
  }


  return (
      <form onSubmit={onSubmit}>
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

  );
}
export default MovieForm;