import React from 'react';

import styles from './Main.scss';

import star from '../../assets/svg/star.svg';

import bckgd from '../../assets/images/bckgd-main.png';
import taxiImg from '../../assets/images/taxi-main.png';

const Main = ({unLogged}) => {
  const [defaultAccount, setDefaultAccount] = React.useState(null);
  const [copyActive, setCopyActive] = React.useState(false);

  const [seconds, setSeconds] = React.useState(2);
  const [ timerActive, setTimerActive ] = React.useState(false);

  React.useEffect(() => {
    
    if (seconds > 0 && timerActive) {
      setTimeout(setSeconds, 1000, seconds - 1);
    } else {
      setTimerActive(false);
    }
  }, [timerActive, seconds]);

  let showWallet;

  const checkWalletAddress = () => {
    if(window.ethereum) {
      window.ethereum.request({method: 'eth_requestAccounts'})
      .then(res => accountChangedHandler(res[0]));
    }
  }

  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
  }

  React.useEffect(() => {
    checkWalletAddress();
  }, defaultAccount);

  if(window.ethereum && defaultAccount) {
    showWallet = defaultAccount.slice(0, 7).concat('...').concat(defaultAccount.slice(-9))
  } else {
    showWallet = 'Wallet is not connected';
  }

  return (
    <div className="main">
      <div className="top_cards">
      <div className="profile-info">
        <div className="ava_id">
          <div className="avatar"></div>
          <div className="id_addr">
            <h2 className="id">ID 2423</h2>
            <h3 className="address">{showWallet}</h3>
          </div>
          {
            !unLogged ? 
            (<button className="copy" onClick={() => {
              navigator.clipboard.writeText(defaultAccount);
              setCopyActive(true);
              setTimerActive(!timerActive);
            }}>Copy</button>) 
            :
            (<button className="copy-inactive" disabled>Copy</button>)
          }
          {copyActive && (
            <div className={timerActive ? 'popCopied' : 'popDisptd'}>
              The wallet address is copied!
            </div>
          )}          
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
          <div className='divide'></div>
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
      <div className="empty"></div>
      <div className="taxi-obj">
        <img src={taxiImg} alt="taxi image" />
      </div>
    </div>
    
  );
};

export default Main;
