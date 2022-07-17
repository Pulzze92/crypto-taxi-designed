import React from 'react';
import {ethers} from 'ethers';

import styles from './Login.scss';
import taxiImg from '../../assets/images/taxi_sign-in.png';

export const Login = ({isLoginPage, setIsLoginPage}) => {

  return (
      <>
      <div className="login">
      <p>CONNECT <br />
      YOUR WALLET <br />
      TO START THE GAME</p>
      <div className="taxi_image_sign-in">
      <img src={taxiImg} alt="taxi image" />
      </div>
      </div>
    </>
    )}

export default Login;
