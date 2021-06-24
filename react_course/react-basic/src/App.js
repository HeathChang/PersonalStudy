//렌더링 될 때마다 특정 작업을 수행하도록 설정 →useEffect
import './App.css';
import React,{ useEffect, useState } from 'react';
import Counter from './components/Counter';

function App() {

  return (
    <div className="App">
      <h1>Heath Chang</h1>
      <Counter/>
    </div>
  );
}

export default App;
