import React from "react";
import { ethers } from "ethers";

import styles from "./Login.scss";
import taxiImg from "../../assets/svg/taxi_login.svg";

export const Login = ({ isLoginPage, setIsLoginPage, unLogged }) => {
  return (
    <div className="login_bck">
      <div className="login">
        <p className={!unLogged ? "desc_inv" : null}>
          CONNECT <br />
          YOUR WALLET <br />
          TO START THE GAME
        </p>
        <div className="taxi_image_sign-in">
          <img src={taxiImg} alt="taxi image" />
        </div>
      </div>
    </div>
  );
};

export default Login;
