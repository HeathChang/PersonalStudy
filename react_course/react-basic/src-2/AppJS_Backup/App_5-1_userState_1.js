import './App.css';
import { useState } from 'react';


function App() {
  const[text,setText]= useState('Heath'); //initial: Heath를 text에 담고, 업데이트 할때 setText 사용
  const onSubmit=(text)=>{
    alert("submitted");
  }
  const onKeyup=(event)=>{
    if(event.keyCode===13){
      onSubmit();
    }
  }
  const updateText= ()=>{
    //text = 'Coder';
    setText("Coder");
    console.log(text);
    //document.getElementById("text").innerHTML=text; → 기존 JS에서 사용 방식
  }
  console.log(text);
  
  return (
    <div className="App">
      <input onKeyUp={onKeyup}/>
      <button onClick={()=>{
        onSubmit();
      }}>Submit</button>
      <br/> <br/>
      <span /*id="text"→ 기존 JS에서 사용 방식 */> {text} </span>
      <button onClick={updateText}> Update </button>
    </div>
  );
}

export default App;
