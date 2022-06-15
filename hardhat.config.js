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
    rinkeby: {
      url: 'https://rinkeby.infura.io/v3/37b95877773d4f10a27c3cd3ffd362d0',
      accounts: ['0xfdd285a6e2faa55b2d89827c1bed33481b25cd93461f0a0beadcf5179d63275c']
    },
  },
  etherscan: {
    apiKey: 'Q92FTD6HSXXKUK1JX7HIA5PY3SRQSV9CXV',
  },
};
