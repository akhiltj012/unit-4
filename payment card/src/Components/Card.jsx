import React from 'react'
import "./Card.css"
// import style from "./Details.module.css"
function Card(props) {
    const {date,type,title,method,platform,icon,arrow} = props
  return (
      <div className="card">
     <div className="left-side">
     <h4>{date}</h4>
     <div classNmae="box">
     <h4>{type}</h4>
     </div>
     <h1>{title}</h1>
     <h1>{method}</h1>
     <h4>{platform}</h4>
     </div>
     <div className="right-side">
     <img src={icon} alt="title"/>
     <h1>{arrow}</h1>
     </div>
     </div>
  )
}

export default Card