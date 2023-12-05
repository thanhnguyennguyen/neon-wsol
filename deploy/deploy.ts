import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const greeter = await deploy("ERC20ForSplFactory", {
    from: deployer,
    args: [],
    log: true,
  });

  console.log(`ERC20ForSplFactory contract: `, greeter.address);
};
export default func;
func.id = "deploy_ERC20ForSplFactory"; // id required to prevent reexecution
func.tags = ["ERC20ForSplFactory"];
