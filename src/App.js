import './App.css';
import React from 'react';
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent';
import MainComponent from './MainComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <MainComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
