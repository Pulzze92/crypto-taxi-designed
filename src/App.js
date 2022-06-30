import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import styles from './app.scss';

import Login from './pages/login/Login';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import District from './pages/district/District';

function App() {
  const [clickedBurger, setClickedBurger] = React.useState(false);
  return (
    <div className="App">
      <div className="app_content">
        <Header clickedBurger={clickedBurger} setClickedBurger={setClickedBurger} />
        <Navbar clickedBurger={clickedBurger} setClickedBurger={setClickedBurger} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Main />} />
          <Route path="/district" element={<District />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
