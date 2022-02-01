import React, { useState, useEffect, createContext } from 'react';
import logo from './logo.png';
import { LoginField } from './LoginField';
import './App.css';
import { overrideThemeVariables } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'

// const UserContext = createContext();

function App() {
  useEffect(() => {
    overrideThemeVariables({
      '--light-bg': '#E4EBF5',
      '--light-bg-dark-shadow': '#bec8e4',
      '--light-bg-light-shadow': '#ffffff',
      '--dark-bg': '#444444',
      '--dark-bg-dark-shadow': '#363636',
      '--dark-bg-light-shadow': '#525252',
      '--primary': '#2979ff',
      '--primary-dark': '#2962ff',
      '--primary-light': '#82b1ff'
    })
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          명당캠핑 어드민
        </p>
      </header>
      <LoginField/>
    </div>
  );
}

export default App;
