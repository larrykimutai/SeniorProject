/**
 *  @type import('hardhat/config').HardhatUserConfig 
 * */

require('dotenv').config();
require("@nomiclabs/hardhat-ethers")
require("@nomiclabs/hardhat-etherscan")

const {API_URL, PRIVATE_KEY} = process.env;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  }
};
