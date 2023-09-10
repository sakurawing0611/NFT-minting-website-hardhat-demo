require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const dotenv = require("dotenv");

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: "https://ethereum-goerli.publicnode.com",
      accounts: ["b4f0702f7fe574d64b93d2adb4486c2e7bdc9c3c457a9f5f1dfce7d94a1fc00d"]
    },
  },
  etherscan: {
    apiKey: "HEM6NQDKZPDC2WCSD9KBA5JCDGEWGWN6HC",
  },
};
