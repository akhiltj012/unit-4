
import './App.css';
import { Stopwatch } from './Stopwatch';
import { Timer } from './timer';
import { useState } from 'react';

function App() {
  const [flag,setflag]=useState(true)
  return (
    <div className="App">
      <button  onClick={()=>{setflag(true)}} >timer</button>
      <button onClick={()=>{setflag(false)}} >Stopwatch</button>
    {flag ? <Timer/>:
     <Stopwatch/>}
    </div>
  );
}

export default App;
