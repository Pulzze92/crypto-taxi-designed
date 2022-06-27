import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import styles from './app.scss';

import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';

function App() {
  return (
    <div className="App">
      <div className="app_content">
        <Header className="header" />
        <Navbar className="navbar" />
        <Main className="main" />
      </div>{' '}
    </div>
  );
}

export default App;
