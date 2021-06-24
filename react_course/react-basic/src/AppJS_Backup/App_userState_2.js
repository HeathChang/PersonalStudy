import './App.css';
import { useState } from 'react';


function App() {
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const onSubmit=(event)=>{
  console.log(username+"\t"+password);
  event.preventDefault(); //form은 항상 페이지가 넘어가기 떄문
  }
  return (
    <div className="App">
      <form onSubmit={onSubmit}>
      <input placeholder="Username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
      <input placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/> <br/>
      <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
