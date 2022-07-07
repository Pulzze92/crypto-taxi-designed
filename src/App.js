import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import styles from "./app.scss";

import Login from "./pages/login/Login";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import District from "./pages/district/District";

import { ethers } from "ethers";
import CryptoTaxiAbi from "./CryptoTaxi.json";

import { useEthers} from '@usedapp/core';


function App() {
  const [clickedBurger, setClickedBurger] = React.useState(false);
  const [unLogged, setUnlogged] = React.useState(true);
  const [accounts, setAccounts] = React.useState([]);

  const { account, deactivate } = useEthers();

  return (
    <div className="App">
      <div className="app_content">
        <Header
          clickedBurger={clickedBurger}
          setClickedBurger={setClickedBurger}
          setUnlogged={setUnlogged}
          unLogged={unLogged}
          account={account}
          deactivate={deactivate}
        />
        <Navbar
          clickedBurger={clickedBurger}
          setClickedBurger={setClickedBurger}
          unLogged={unLogged}
          setUnlogged={setUnlogged}
        />
        <Routes>
          <Route
            path="/"
            element={<Login unLogged={unLogged} setUnlogged={setUnlogged} />}
          />
          <Route path={"/main"} element={<Main unLogged={unLogged}/>} />
          <Route path="/district" element={<District />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
