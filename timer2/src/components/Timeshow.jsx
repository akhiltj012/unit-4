import React from 'react'

function Timeshow({time,end}) {

 
  return (
    <div>
        <h1>Timer</h1>
        <h1>{time}</h1>
        <h1>End time is {end} seconds</h1>
    
    </div>

  )
}
//------------------------
export default Timeshow