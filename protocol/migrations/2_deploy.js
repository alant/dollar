const Deployer1 = artifacts.require("Deployer1");
const Root = artifacts.require("Root");

async function deployImplementation(deployer) {
  const d1 = await deployer.deploy(Deployer1);
  const root = await deployer.deploy(Root, d1.address);
}

module.exports = function(deployer) {
  deployer.then(async() => {
    console.log(deployer.network);
    switch (deployer.network) {
      case 'development':
      case 'rinkeby':
      case 'ropsten':
        await deployImplementation(deployer);
        break;
      case 'mainnet':
      case 'mainnet-fork':
        await deployImplementation(deployer);
        break;
      default:
        throw("Unsupported network");
    }
  })
};