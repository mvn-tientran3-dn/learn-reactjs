import './App.css';
import React from 'react';
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent';
import ListComponent from "./ListComponent";

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <ListComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
