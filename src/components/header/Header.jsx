import React from 'react';
import { ethers } from 'ethers';

import {Link} from 'react-router-dom';
import styles from './Header.scss';

import CryptoTaxiAbi from "../../CryptoTaxi.json";

import logo from '../../assets/images/logo_main.png';

const Header = ({ clickedBurger, 
                  setClickedBurger, 
                  config, 
                  unLogged, 
                  setUnlogged, 
                  deactivate, 
                  isLoginPage}) => {
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [defaultAccount, setDefaultAccount] = React.useState(null);
  const [userBalance, setUserBalance] = React.useState(null);

  const connectWalletHandler = () => {
    if(window.ethereum) {
      window.ethereum.request({method: 'eth_requestAccounts'})
        .then(result => {
          accountChangedHandler(result[0]);
        })
    } else {
      setErrorMessage('Install Metamask');
    }
  }

  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    getUserBalance(newAccount.toString());
  }

  const getUserBalance = (address) => {
    window.ethereum.request({method: 'eth_getBalance', params: [address, 'latest']})
      .then(balance => {
        setUserBalance(ethers.utils.formatEther(balance).slice(0,5));
      })
  }

  const chainChangedHandler = () => {
    window.location.reload();
  }

  window.ethereum.on('accountsChanged', accountChangedHandler);
  window.ethereum.on('chainChanged', chainChangedHandler);

  const contractAddress = "0xc5c06fd71722d45aebd2d4e50c3e7d9a67676bb9";
  const contract = new ethers.Contract(contractAddress, CryptoTaxiAbi);

  return (
    <div className={!unLogged && "header_login_logged"}>
    <div className={isLoginPage ? 'header_login' : 'header'}>
      <div className={clickedBurger ? 'burger_inv' : 'burger'}>
        <div className={unLogged ? 'burger_inv' : 'empty'}>
          <svg
            onClick={() => setClickedBurger(true)}
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="white">
            <path d="M3.5,7 C3.22385763,7 3,6.77614237 3,6.5 C3,6.22385763 3.22385763,6 3.5,6 L20.5,6 C20.7761424,6 21,6.22385763 21,6.5 C21,6.77614237 20.7761424,7 20.5,7 L3.5,7 Z M3.5,12 C3.22385763,12 3,11.7761424 3,11.5 C3,11.2238576 3.22385763,11 3.5,11 L20.5,11 C20.7761424,11 21,11.2238576 21,11.5 C21,11.7761424 20.7761424,12 20.5,12 L3.5,12 Z M3.5,17 C3.22385763,17 3,16.7761424 3,16.5 C3,16.2238576 3.22385763,16 3.5,16 L20.5,16 C20.7761424,16 21,16.2238576 21,16.5 C21,16.7761424 20.7761424,17 20.5,17 L3.5,17 Z" />
          </svg>
          </div>
        </div>
      <div className={unLogged ? "header_unlog" : "header_content"}>
      
        <div className={isLoginPage ? 'logo_main' : 'logo_main-dis'}>
          <img src={logo} alt="logo" />
        </div>
        
        {!unLogged && (
          <div className="balance">
            <svg
              width="44"
              height="24"
              viewBox="0 0 44 24"
              fill="#F6D738"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M40.15 11.175L38.8094 13.0656L36.9187 11.725L38.2594 9.83436L40.15 11.175ZM36.3687 8.52811L35.0281 10.4187L33.1375 9.07811L34.4781 7.18749L36.3687 8.52811ZM37.5031 14.9562L36.1625 16.8469L34.2719 15.5062L35.6125 13.6156L37.5031 14.9562ZM33.6875 12.3094L32.3469 14.2L30.4562 12.8594L31.7969 10.9687L33.6875 12.3094ZM33.1375 9.11249L31.7969 11.0031L29.9062 9.66249L31.2469 7.77186L33.1375 9.11249ZM36.9187 11.7594L35.5781 13.65L33.6875 12.3094L35.0281 10.4187L36.9187 11.7594ZM44 10.35L36.8156 20.5937L25.3687 12.5844L17.875 23.3437C17.6344 23.6875 17.1531 23.7906 16.8094 23.55C16.4656 23.3094 16.3625 22.8281 16.6375 22.4844L31.8312 0.656237C32.0719 0.312487 32.5531 0.209362 32.8969 0.449987C33.2406 0.690612 33.3438 1.17186 33.0688 1.51561L32.5187 2.30624L44 10.35ZM41.6969 12.275L40.1156 11.175L41.3187 9.42186L39.4281 8.08124L38.225 9.83436L36.3344 8.49374L37.5375 6.74061L35.6469 5.39999L34.4438 7.15311L32.5531 5.81249L33.7563 4.05936L32.0719 2.89061L30.8687 4.64374L32.5531 5.81249L31.2125 7.70311L29.5281 6.53436L28.1875 8.42499L29.9062 9.66249L28.5656 11.5531L26.8813 10.3844L25.7812 11.9656L27.5 13.1344L28.6 11.5531L30.4906 12.8937L29.3906 14.475L31.2812 15.7812L32.3813 14.2L34.2719 15.5406L33.1719 17.1219L35.0625 18.4281L36.1625 16.8469L37.7437 17.9469L39.0844 16.0562L37.5031 14.9562L38.8438 13.0656L40.425 14.1656L41.6969 12.275ZM5.74062 9.86874L7.08125 11.7594L5.19062 13.1L3.85 11.2094L5.74062 9.86874ZM9.52187 7.18749L10.8625 9.07811L8.97187 10.4187L7.63125 8.52811L9.52187 7.18749ZM8.3875 13.65L9.72813 15.5406L7.8375 16.8812L6.49688 14.9906L8.3875 13.65ZM12.2031 11.0031L13.5438 12.8937L11.6531 14.2344L10.3125 12.3437L12.2031 11.0031ZM12.7531 7.77186L14.0938 9.66249L12.2031 11.0031L10.8625 9.11249L12.7531 7.77186ZM8.97187 10.4187L10.3125 12.3094L8.42188 13.65L7.08125 11.7594L8.97187 10.4187ZM11.4469 2.34061L10.8969 1.54999C10.6562 1.20624 10.725 0.724987 11.0687 0.484362C11.4125 0.243737 11.8937 0.312487 12.1344 0.690612L27.3969 22.45C27.6375 22.7937 27.5688 23.275 27.225 23.5156C26.8813 23.7562 26.4 23.6875 26.1594 23.3094L18.6656 12.5844L7.21875 20.5937L0 10.35L11.4469 2.34061ZM3.60938 14.1656L5.19062 13.0656L6.53125 14.9562L4.95 16.0562L6.29063 17.9469L7.87188 16.8469L8.97187 18.4281L10.8625 17.0875L9.7625 15.5062L11.6531 14.1656L12.7188 15.7812L14.6094 14.4406L13.5094 12.8594L15.4 11.5187L16.5 13.1344L18.1844 11.9656L17.0844 10.3844L15.4 11.5531L14.0594 9.66249L15.7438 8.49374L14.4031 6.60311L12.7188 7.77186L11.3781 5.88124L13.0625 4.71249L11.8594 2.95936L10.175 4.12811L11.3781 5.88124L9.4875 7.22186L8.28437 5.46874L6.39375 6.80936L7.59687 8.56249L5.70625 9.90311L4.50312 8.14999L2.6125 9.49061L3.81562 11.2437L2.23438 12.3437L3.60938 14.1656Z" />
            </svg>

            <div className="balance_amount">
              <span>Balance:</span>
                <span className="balance_amount-sum">{userBalance}</span> 
                
                
              <span className="balance_amount-currency">BNB</span>
            </div>
          </div>
        )}
        {/* <div className={unLogged ? 'empty' : 'empty_dis'}
        ></div> */}
        <div className={unLogged ? 'sign_button_container' : 'out_button_container'}>
        <div className={unLogged ? 'arrow' : 'arrow-inv'}>
    <svg width="80" height="18" viewBox="0 0 80 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M80 9L65 0.339746V17.6603L80 9ZM0 10.5H66.5V7.5H0V10.5Z" fill="#F6D738"/>
    </svg>
    </div>
          {
            unLogged ? (
              <Link to="/main">
            <button onClick={() => {
              setUnlogged(false);
              connectWalletHandler();
              
            }}>sign in</button>
            </Link>
            ) : (<button disabled onClick={() => {
              setUnlogged(true);
            }}>sign out</button>)
          }
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default Header;
