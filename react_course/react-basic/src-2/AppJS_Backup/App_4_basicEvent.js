import './App.css';

function App() {

  const onSubmit=(event)=>{
    alert("submitted");
  }
  const onKeyup=(event)=>{
    if(event.keyCode===13){
      onSubmit();
    }
  }

  return (
    <div className="App">
      <input onKeyUp={onKeyup}/>
      <button onClick={()=>{
        onSubmit();
      }}>Submit</button>
    </div>
  );
}

export default App;
