import React from "react";
import "./ControlButtons.css";
  
export default function ControlButtons(props) {
  const StartButton = (
    <div className="btn-grp">
    <div className="btn btn-one"
         onClick={props.handleStart}>
       {props.isPaused ? "Start" : "stop"}
    </div>
     <div className="btn btn-two" 
     onClick={props.handleReset}>
  Reset
</div>
</div>
  );
  const ActiveButtons = (
    <div className="btn-grp">
        <div className="btn btn-one" 
           onClick={props.handlePauseResume}>
        {props.isPaused ? "Start" : "stop"}
      </div>
      <div className="btn btn-two" 
           onClick={props.handleReset}>
        Reset
      </div>
    
    </div>
  );
  
  return (
    <div className="Control-Buttons">
      <div>{props.active ? ActiveButtons : StartButton}</div>
    </div>
  );
}



// import StopWatch from './Components/StopWatch/StopWatch';
// import {useState} from "react"  
// import Timerr from "./Components/Timerr"





// function App() {
//   const [show,setShow] = useState(true)
//   const handleClick= ()=>{
//     setShow(!show)
//   }
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
//   <div className="mid">{show?<Timerr/>:  <StopWatch /> }
    

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
// }
  
// export default App;
