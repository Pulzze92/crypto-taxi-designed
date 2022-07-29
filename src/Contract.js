import { ethers } from "ethers";
import CryptoTaxiAbi from "./CryptoTaxi.json";

const checkWalletAddress = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => (res[0]));
    }
  };

const provider = new ethers.providers.Web3Provider(window.ethereum);
const cryptoTaxi = new ethers.Contract(
      "0xBF6645CD554cd3CD74E30290726Feb25c08D079a",
      CryptoTaxiAbi,
      provider
);

const taxiGame = {
    register: async () => {
        await cryptoTaxi.register();
    },
    isUserRegistered: async () => {
        const isRegistered = await cryptoTaxi.isUserRegistered(checkWalletAddress());
        return isRegistered;
    },
    getLevelsInfo: async () => {
        const levelInfo = await cryptoTaxi.getUserLevelsInfo();
        return levelInfo;
    },
    getUserInfo: async () => {
        const userInfo = await cryptoTaxi.getUserAndRewardInfo();
    }
}


export default taxiGame;

    