import React from "react";

import styles from "./District.scss";
import taxi from "../../assets/images/taxi_district.png";
import sign from "../../assets/images/sign_district.png";

import { ethers } from "ethers";
import CryptoTaxiAbi from "../../CryptoTaxi.json";

const levels = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const District = () => {
  // const [levelPriceInfo, setLevelPriceInfo] = React.useState([]);
  // const [clickedLvl, setClickedLvl] = React.useState(0);
  // const lvlPrice = [];

  // const handleSubmit = async (i) => {
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   const cryptoTaxi = new ethers.Contract(
  //     "0xc5c06fd71722d45aebd2d4e50c3e7d9a67676bb9",
  //     CryptoTaxiAbi,
  //     provider
  //   );

  //   const levelPrice = await cryptoTaxi.getLevelPrices();

  //   for (let i of Object.values(levelPrice)) {
  //     lvlPrice.push(+i._hex.toString(10) / 1000000000000000000);
  //   }

  //   setLevelPriceInfo(lvlPrice);
  // };

  // React.useEffect(() => {
  //   handleSubmit();
  // }, clickedLvl);

  return (
    <div className="district">
      <div className="grid_overlay">
        <div className="levels">
          {levels.map((el, i) => {
            return (
              <div className="level" key={i} >
                <span>{el}</span>
              </div>
            );
          })}
        </div>
        <div className="taxi_card">
          <div className="taxi_district">
            <img src={sign} className="signImg" alt="sign" />
            <img src={taxi} className="taxiImg" alt="taxi" />
          </div>
          <div className="priceSide">
            <div className="stars">
              <svg
                width="32"
                height="30"
                viewBox="0 0 32 30"
                fill="#C2C2C2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.0541 0.758001C15.363 -0.142771 16.637 -0.142774 16.9459 0.757998L20.0341 9.76211C20.1727 10.1663 20.5527 10.4377 20.98 10.4377H30.8535C31.8353 10.4377 32.2292 11.7048 31.4205 12.2614L23.5273 17.6943C23.1577 17.9487 23.0028 18.4181 23.1484 18.8425L26.1849 27.6962C26.4977 28.6081 25.4661 29.391 24.6721 28.8444L16.567 23.2656C16.2255 23.0306 15.7745 23.0306 15.433 23.2656L7.32795 28.8444C6.53385 29.391 5.50231 28.6081 5.81506 27.6962L8.85164 18.8425C8.99719 18.4181 8.84228 17.9487 8.4727 17.6943L0.57953 12.2614C-0.229181 11.7048 0.164747 10.4377 1.14651 10.4377H11.02C11.4473 10.4377 11.8273 10.1663 11.9659 9.76212L15.0541 0.758001Z" />
              </svg>
              <svg
                width="32"
                height="30"
                viewBox="0 0 32 30"
                fill="#C2C2C2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.0541 0.758001C15.363 -0.142771 16.637 -0.142774 16.9459 0.757998L20.0341 9.76211C20.1727 10.1663 20.5527 10.4377 20.98 10.4377H30.8535C31.8353 10.4377 32.2292 11.7048 31.4205 12.2614L23.5273 17.6943C23.1577 17.9487 23.0028 18.4181 23.1484 18.8425L26.1849 27.6962C26.4977 28.6081 25.4661 29.391 24.6721 28.8444L16.567 23.2656C16.2255 23.0306 15.7745 23.0306 15.433 23.2656L7.32795 28.8444C6.53385 29.391 5.50231 28.6081 5.81506 27.6962L8.85164 18.8425C8.99719 18.4181 8.84228 17.9487 8.4727 17.6943L0.57953 12.2614C-0.229181 11.7048 0.164747 10.4377 1.14651 10.4377H11.02C11.4473 10.4377 11.8273 10.1663 11.9659 9.76212L15.0541 0.758001Z" />
              </svg>
              <svg
                width="32"
                height="30"
                viewBox="0 0 32 30"
                fill="#C2C2C2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.0541 0.758001C15.363 -0.142771 16.637 -0.142774 16.9459 0.757998L20.0341 9.76211C20.1727 10.1663 20.5527 10.4377 20.98 10.4377H30.8535C31.8353 10.4377 32.2292 11.7048 31.4205 12.2614L23.5273 17.6943C23.1577 17.9487 23.0028 18.4181 23.1484 18.8425L26.1849 27.6962C26.4977 28.6081 25.4661 29.391 24.6721 28.8444L16.567 23.2656C16.2255 23.0306 15.7745 23.0306 15.433 23.2656L7.32795 28.8444C6.53385 29.391 5.50231 28.6081 5.81506 27.6962L8.85164 18.8425C8.99719 18.4181 8.84228 17.9487 8.4727 17.6943L0.57953 12.2614C-0.229181 11.7048 0.164747 10.4377 1.14651 10.4377H11.02C11.4473 10.4377 11.8273 10.1663 11.9659 9.76212L15.0541 0.758001Z" />
              </svg>
            </div>
            <div className="district_price">
              <div className="price_table">
                <h3>district price:</h3>
                <h2> BNB</h2>
                <button>Start rent</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default District;
