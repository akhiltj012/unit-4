import React from 'react'
import Card from "./Card"
import style from "./Details.module.css"
const data = {
    date:"28/10/2020",
    type:"Case Study",
    title:"Amazon Gift",
    method:"Pay",
    platform:"Desktop-Mobile",
    icon:"https://image.similarpng.com/very-thumbnail/2020/11/Amazon-icon-in-flat-design-on-transparent-background-PNG.png",
    arrow:"->"
   
}
const data2 = {
    date:"17 Sep 2020",
    type:"Case Study",
    title:"Apple Gift",
    method:"Payment",
    platform:"MacOC-Mobile",
    icon:"https://e7.pngegg.com/pngimages/322/708/png-clipart-apple-electric-car-project-logo-apple-icon-heart-logo.png",
    arrow:"->"

}
function Details() {
    return (
      <>
      <div className = {style.card1}>
      <Card className = {style.card1} {...data}/>
      </div>
      <div className = {style.card2}>
      <Card className = "card1" {...data2}/>
      </div>
      </>
    )
  }
  

export default Details