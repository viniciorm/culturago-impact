const hre = require('hardhat');

async function main() {
  const SimpleNFT = await hre.ethers.getContractFactory('SimpleNFT');
  const contract = await SimpleNFT.deploy();
  await contract.deployed();

  console.log('SimpleNFT deployed to:', contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
