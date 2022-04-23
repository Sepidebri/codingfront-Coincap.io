import 'antd/dist/antd.css';
import './App.css';
import  MyRoutes  from './routes';
import { ThemeProvider } from 'styled-components'
import React, { useState, useEffect } from 'react';

const LightTheme ={
    primary: '#4851f4',
    background: '#ffffff',
    nav: '#f8f8f8',
    border: '#deebf1',
    text: '#202224',

}
const DarkTheme ={
    primary: '#4851f4',
    background: '#1f2023',
    nav: '#27282b',
    border: '#303236',
    text: '#f8f8f8',
}

const themes ={
  light: LightTheme,
  dark: DarkTheme
}
function App() {
  const [theme, setTheme] =useState("light")
  return (
    <ThemeProvider theme={themes[theme]}>
    <MyRoutes theme={theme} setTheme={setTheme}/>  
    </ThemeProvider>
  )
}

export default App;
