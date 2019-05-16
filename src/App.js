import React from 'react';
import logo from './logo.svg';
import './App.scss';
import NavBar from '../src/components/navbar/NavBar.js';
import TourList from './components/TourList';

function App() {
  return (
    <main>
      <NavBar/>
      <TourList/>
    </main>
    
  );
}

export default App;
