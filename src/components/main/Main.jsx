import React from "react";
import { Link } from "react-router-dom";

import styles from "./Main.scss";

import star from "../../assets/svg/star.svg";

import bckgd from "../../assets/images/bckgd-main.png";
import taxiImg from "../../assets/images/taxi-main.png";

import taxiGame from "../../Contract";

const Main = ({ unLogged }) => {
  const [defaultAccount, setDefaultAccount] = React.useState(null);
  const [copyActive, setCopyActive] = React.useState(false);

  const [seconds, setSeconds] = React.useState(2);
  const [timerActive, setTimerActive] = React.useState(false);

  const [userId, setUserId] = React.useState(0);
  const [dateReg, setDateReg] = React.useState(null);
  const [districtProfit, setDistrictProfit] = React.useState(0);
  const [refRwd, setRefRwd] = React.useState(0);
  const [referrer, setReferrer] = React.useState();

  const usrInfo = async () => {
    const receivedObj = await taxiGame.getUserAndRewardInfo();
    setUserId(receivedObj[0].toString(10));
    const regTime = receivedObj[1].toString(10) * 1000;
    let dateObj = new Date(regTime);
    let date = dateObj.toLocaleString("ru");
    setDateReg(date.split(",")[0]);

    setDistrictProfit(receivedObj[5].toString(10));
    setRefRwd(receivedObj[6].toString(10));

    let isInvited = receivedObj[2].toString(10);
    isInvited > 0
      ? setReferrer(`by Id ${isInvited}`)
      : setReferrer("Have no referrer");
  };

  React.useEffect(() => {
    usrInfo();
  });

  React.useEffect(() => {
    if (seconds > 0 && timerActive) {
      setTimeout(setSeconds, 1000, seconds - 1);
    } else {
      setTimerActive(false);
    }
  }, [timerActive, seconds]);

  let showWallet;

  const checkWalletAddress = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangedHandler(res[0]));
    }
  };

  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
  };

  React.useEffect(() => {
    checkWalletAddress();
  }, [defaultAccount]);

  if (window.ethereum && defaultAccount) {
    showWallet = defaultAccount
      .slice(0, 7)
      .concat("...")
      .concat(defaultAccount.slice(-9));
  } else {
    showWallet = "Wallet is not connected";
  }

  return (
    <div className="main">
      <div className="top_cards">
        <div className="profile-info">
          <div className="ava_id">
            <div className="avatar"></div>
            <div className="id_addr">
              <h2 className="id">ID {userId}</h2>
              <h3 className="address">{showWallet}</h3>
            </div>
            {!unLogged ? (
              <button
                className="copy"
                onClick={() => {
                  navigator.clipboard.writeText(defaultAccount);
                  setCopyActive(true);
                  setTimerActive(!timerActive);
                }}
              >
                Copy
              </button>
            ) : (
              <button className="copy-inactive" disabled>
                Copy
              </button>
            )}
            {copyActive && (
              <div className={timerActive ? "popCopied" : "popDisptd"}>
                The wallet address is copied!
              </div>
            )}
          </div>
          <div className="pers_stat">
            <h4 className="invited">Was invited {dateReg}</h4>
            <h4 className="ref_id">{referrer}</h4>
          </div>
          <div className="amounts_info">
            <div className="district_profit">
              <h3>District profit:</h3>
              <h4>{districtProfit} BNB</h4>
              <Link to="/district">
                <button className="lets_play">Let's play</button>
              </Link>
            </div>

            <div className="referal_payouts">
              <h3>Referal payouts:</h3>
              <h4>{refRwd} BNB</h4>
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
