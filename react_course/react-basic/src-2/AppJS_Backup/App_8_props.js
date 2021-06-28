//부모 컴포넌트→ 자식 컴포넌트 데이터 보내기: props

import './App.css';
import React,{ useEffect, useState } from 'react';
import Counter from './components/Counter';

function App() {
  const [buttonName, setButtonName] = useState("클릭");
  const clickButton=()=>{
    setButtonName("click해주세요")
  }
  ;
  return (
    <div className="App">
      <h1>Heath Chang</h1>
      <Counter click ={buttonName}/>
      <Counter click="click1"/>
      <button onClick={clickButton}> 클릭시 바뀜→ {buttonName}</button>
    </div>
  );
}

export default App;
