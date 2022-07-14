import React from 'react';
import {ethers} from 'ethers';

import styles from './Login.scss';
import taxiImg from '../../assets/images/taxi_sign-in.png';

export const Login = ({ unLogged }) => {

  return (
    <>
    <div className="pos-par">
    <div className={unLogged ? 'arrow' : 'arrow-inv'}>
    <svg width="80" height="18" viewBox="0 0 80 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M80 9L65 0.339746V17.6603L80 9ZM0 10.5H66.5V7.5H0V10.5Z" fill="#F6D738"/>
</svg>
</div>
</div>
      <div className="login">
      <p>CONNECT <br />
YOUR WALLET <br />
TO START THE GAME</p>
      </div>
      <div className="taxi_image_sign-in">
      <img src={taxiImg} alt="taxi image" />
      </div>
      
    </>
  );
};

export default Login;
