const {
  parseUnits
} = require("ethers/lib/utils");
const hre = require("hardhat");

async function main() {
  const CryptoTaxi = await hre.ethers.getContractFactory("CryptoTaxi");
  const taxi = await CryptoTaxi.deploy('0x59048A14952d08a488169409448e2483c60EbB5F');

  await taxi.deployed('0x59048A14952d08a488169409448e2483c60EbB5F');

  console.log("CryptoTaxi deployed to:", taxi.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });