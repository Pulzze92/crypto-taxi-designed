async function main() {
    const CryptoTaxi = await ethers.getContractFactory('CryptoTaxi');
  
    const test_prod = await CryptoTaxi.deploy('0x59048A14952d08a488169409448e2483c60EbB5F');
    await test_prod.deployed();
    console.log("Contract deployed to address: ", test_prod.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    })