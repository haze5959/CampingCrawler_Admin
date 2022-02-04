import React, { useState, useEffect, createContext } from 'react';
import { LoginHeader } from './components/LoginHeader';
import { LoginField } from './components/LoginField';
import { MainLoading } from './components/MainLoading';
import './App.css';
import { overrideThemeVariables } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'

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
      <LoginHeader />
      <LoginField />
      <MainLoading />
    </div>
  );
}

export default App;
