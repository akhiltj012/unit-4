import './App.css';
import StopWatch from './Components/StopWatch/StopWatch';
import {useState} from "react"  
import Timerr from "./Components/Timer/Timerr"
import ControlButtons from './Components/ControlButtons/ControlButtons';




function App() {
  const [show,setShow] = useState(true)
  const handleClick= ()=>{
    setShow(!show)
  }
return (
  <div className="App">
    <div className="top">
      <div className="left" >
      <h4 className="th" onClick={handleClick} >TIMER</h4>
      </div>
      <div className="right" >
      <h4 className="th"  onClick={handleClick} >STOPWATCH</h4>
      </div>
    </div>
  <div className="mid">{show?<Timerr/>:  <StopWatch /> }
    

  </div>
  <div className="bottom">
    {/* <div className="bottom-left-main"> */}
  {/* <div className="bottom-left">START</div>
  <div className="bottom-right">RESET</div> */}
  {/* </div> */}
    <div className="bottom-right-main"></div>
    </div>
  </div>
  
);
}
  
export default App;

// const [show,setShow] = useState(true)
// const handleClick= ()=>{
//   setShow(!show)
// }

// return (
//   <div className="App">
//     <div className="top">
//       <div className="left" >
//       <h4 className="th" onClick={handleClick} >TIMER</h4>
//       </div>
//       <div className="right" >
//       <h4 className="th"  onClick={handleClick} >STOPWATCH</h4>
//       </div>
//     </div>
//   <div className="mid">{show?<Timer/>:  <StopWatch /> }
    

//   </div>
//   <div className="bottom">
//     <div className="bottom-left-main">
//   <div className="bottom-left">START</div>
//   <div className="bottom-right">RESET</div>
//   </div>
//     <div className="bottom-right-main"></div>
//     </div>
//   </div>
// );