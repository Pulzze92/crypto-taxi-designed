import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import styles from "./app.scss";

import Login from "./pages/login/Login";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import District from "./pages/district/District";

import CryptoTaxiAbi from "./CryptoTaxi.json";

import { useEthers} from '@usedapp/core';


function App() {
  const [clickedBurger, setClickedBurger] = React.useState(false);
  const [unLogged, setUnlogged] = React.useState(true);
  const [accounts, setAccounts] = React.useState([]);
  const [isLoginPage, setIsLoginPage] = React.useState(true);

  const { account, deactivate } = useEthers();

  return (
    <div className="App">
      <div className={isLoginPage ? "app_content_login" : "app_content"}>
        <Header
          clickedBurger={clickedBurger}
          setClickedBurger={setClickedBurger}
          setUnlogged={setUnlogged}
          unLogged={unLogged}
          account={account}
          deactivate={deactivate}
          isLoginPage={isLoginPage}
          setIsLoginPage={setIsLoginPage}
        />
        <Navbar
          clickedBurger={clickedBurger}
          setClickedBurger={setClickedBurger}
          unLogged={unLogged}
          setUnlogged={setUnlogged}
          isLoginPage={isLoginPage}
        />
        <Routes>
          <Route
            path="/"
            element={<Login 
              unLogged={unLogged}
              setUnlogged={setUnlogged}
              isLoginPage={isLoginPage}
              setIsLoginPage={setIsLoginPage}
              />}
          />
          <Route path={"/main"} element={<Main unLogged={unLogged}/>} />
          <Route path="/district" element={<District />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
