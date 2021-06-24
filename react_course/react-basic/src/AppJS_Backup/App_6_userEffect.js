//렌더링 될 때마다 특정 작업을 수행하도록 설정 →useEffect
import './App.css';
import React,{ useEffect, useState } from 'react';

function App() {
  const [count,setCount] = useState(0);
  const [heath,setHeath] = useState(0);
  useEffect(()=>{
    console.log("useEffect"); //리렌더링  발생후, 실행 
    console.log("원래 count 값: "+count);
  },[count,heath]) //count가 변경될때만 실행 (두개 있으면 둘다 변경 ), rendering은 되지만 딴거는 안됨. 
  
  useEffect(()=>{
    console.log("first rendering");
  },[]) //한번만 실행하고, 두번은 실행 X
  
  const increment=()=>{
    setCount(count+1);
    console.log("Increment에서 count+1");
  }

  console.log("rendering");

  return (
    <div className="App">
      <h1>Heath Chang</h1>
      <button onClick={increment}> Click </button>
      <button onClick={()=>{setHeath(heath+1)}}> Click1 </button>
    </div>
  );
}

export default App;
