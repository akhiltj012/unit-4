import styled from "styled-components";

export const Border=styled.div`
margin:10px;
padding:10px;
border:1px solid black;
color:${(props)=>props.color};
background-color:${(props)=>(props.color==="white"? "black" : "white")};
`;