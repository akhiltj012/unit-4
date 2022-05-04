import React,{createContext} from "react";
import { useState } from "react";


export const Themecontext =createContext();

export const ThemeProvider=({children})=>{
    const[theme,setTheme]=useState("white")

    const changeTheme=()=>{
        setTheme(theme==="white" ? "black" :"white")
    }

    return(
        <Themecontext.Provider value={[theme,changeTheme]}>
            {children}
        </Themecontext.Provider>
    )
}