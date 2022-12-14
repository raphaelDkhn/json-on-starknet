import { expect } from "chai";
import { starknet } from "hardhat";
import { StarknetContract } from "hardhat/types";
import { onchainObjectToJson } from "../utils/onchainObjectToJson";
import originalJSON from "./input/test.json";
import * as fs from "fs";

let contract: StarknetContract;

describe("Test", function () {
  this.timeout(300_000);

  before(async () => {
    const contractFactory = await starknet.getContractFactory("test-generated");
    contract = await contractFactory.deploy();
  });

  it("The object retrieved from the contract should be the same as the original JSON object", async () => {
    const originalObj = JSON.parse(JSON.stringify(originalJSON));

    const onchainObj = await contract.call("retrieve_object");
    const object = onchainObjectToJson(onchainObj.object);

    const json = JSON.stringify(object);
    fs.writeFileSync(__dirname + "/result/test.json", json);

    expect(object).to.deep.equal(originalObj);
  });
});
