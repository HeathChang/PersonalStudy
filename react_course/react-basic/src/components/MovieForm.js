import React,{ useEffect, useState } from 'react';

const MovieForm=({addMovie})=>{
  const [movieTitle,setMovieTitle]= useState("");
  const [movieYear,setMovieYear]= useState("");
  const [getError,setError]= useState("");

  const resetForm= ()=>{
    setMovieTitle("");
    setMovieYear("");
  }

  const validateForm=()=>{
    let validated = true; 
    if(!movieTitle||!movieYear){
      setError("영화제목 혹은 개봉년도을 입력해주세요");
      validated=false;
    }
    return validated;
  }
  const resetErrors=()=>{
    setError("");
  }

  const onSubmit=(event)=>{
    event.preventDefault();
    if(validateForm()){
      addMovie({
        id: Date.now(),
        title: movieTitle,
        year: movieYear,
      })
      resetErrors();
      resetForm();
    }
  
  }


  return (
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={movieTitle} //입력시 값이 변경
          placeholder="영화제목"
          onChange={e=>setMovieTitle(e.target.value)}
        />
        <br/>
        <input
          type="number"
          value={movieYear} //입력시 값이 변경
          placeholder="개봉년도"
          onChange={e=>{setMovieYear(e.target.value)}}
        />
        <br/>
        <button type ="submit"> 영화 추가</button>  
        <br/>
        <div style={{color: "red"}}>{getError}</div>
      </form>

  );
}
export default MovieForm;