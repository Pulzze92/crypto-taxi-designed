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
const signer = provider.getSigner();
const cryptoTaxi = new ethers.Contract(
      "0xBF6645CD554cd3CD74E30290726Feb25c08D079a",
      CryptoTaxiAbi,
      signer
);

const registerOptions = {value: ethers.utils.parseEther("0.025")};

const taxiGame = {
    register: async () => {
        await cryptoTaxi.register(registerOptions);
    },
    isUserRegistered: async (result) => {
        const isRegistered = await cryptoTaxi.isUserRegistered(result);
        return isRegistered;
    },
    getLevelsInfo: async () => {
        const levelInfo = await cryptoTaxi.getUserLevelsInfo();
        return levelInfo;
    },
    getUserInfo: async () => {
        const userInfo = await cryptoTaxi.getUserAndRewardInfo();
    },
    buyLevel: async (lvl, price) => {
        const lvlBuy = await cryptoTaxi.buyLevel(lvl, price);
    },
    getUserAndRewardInfo: async () => {
        const usrObj = await cryptoTaxi.getUserAndRewardInfo();
        return usrObj;
    }
}


export default taxiGame;

    