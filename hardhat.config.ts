import { HardhatUserConfig, task } from "hardhat/config";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "@shardlabs/starknet-hardhat-plugin";
import { generateContract } from "./scripts/generateContract";

task("generateContract", "represent a JSON as a Starknet smart contract")
  .addPositionalParam("json", "path to the JSON file")
  .addPositionalParam("folder", "folder where the contract should be generated")
  .addPositionalParam("name", "name of the generated file")
  .setAction(async ({ json, folder, name }, hre) => {
    return await generateContract(json, folder, name, hre);
  });

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  paths: {
    starknetSources: "contracts",
  },
  starknet: {
    //dockerizedVersion: "0.10.0",
    venv: "active",
    //network: "devnet",
    network: "integrated-devnet",
    wallets: {
      OpenZeppelin: {
        accountName: "OpenZeppelin",
        modulePath:
          "starkware.starknet.wallets.open_zeppelin.OpenZeppelinAccount",
        accountPath: "~/.starknet_accounts",
      },
    },
  },
  networks: {
    devnet: {
      url: "http://127.0.0.1:5050",
    },
    integratedDevnet: {
      url: "http://127.0.0.1:5050",
      //venv: "active",
      // dockerizedVersion: "<DEVNET_VERSION>",
    },
  },
};

export default config;
