import React from 'react';

import styles from './Main.scss';

import star from '../../assets/svg/star.svg';

import bckgd from '../../assets/images/bckgd-main.png';
import taxiImg from '../../assets/images/taxi-main.png';

const Main = () => {
  return (
    <div className="main">
      <div className="taxi-obj"></div>
      <div className="profile-info">
        <div className="ava_id">
          <div className="avatar"></div>
          <div className="id_addr">
            <h2 className="id">ID 2423</h2>
            <h3 className="address">5nfask3...fka5e23ko</h3>
          </div>
          <button className="copy">Copy</button>
        </div>
        <div className="pers_stat">
          <h4 className="invited">Was invited 01.05.2022</h4>
          <h4 className="ref_id">by ID 2331</h4>
        </div>
        <div className="amounts_info">
          <div className="district_profit">
            <h3>District profit:</h3>
            <h4>10000 BNB</h4>
            <button className="lets_play">Let's play</button>
          </div>
          <div className="live_sep"></div>
          <div className="referal_payouts">
            <h3>Referal payouts:</h3>
            <h4>10000 BNB</h4>
            <button className="check_stats">Check stats</button>
          </div>
        </div>
      </div>
      <div className="personal_link">
        <div className="stars">
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
        </div>
        <h3 className="title_link">PERSONAL REFERAL LINK:</h3>
        <button className="copy_link">COPY LINK</button>
      </div>
    </div>
  );
};

export default Main;
