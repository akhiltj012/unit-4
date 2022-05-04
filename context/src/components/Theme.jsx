import React from 'react'
import { Border } from './Border.styled';
import { useContext } from 'react';
import { Themecontext } from '../context/ThemeProvider';

const Theme = () => {
    const [theme,changeTheme]=useContext(Themecontext)
  return (
    <div>
        <Border color={theme} className="App">
      <h1>Hello</h1>
      <div>
        {theme}:<button onClick={changeTheme}>Change Theme</button>
      </div>
    </Border>
    </div>
  )
}

export default Theme