import { Midi } from "@tonejs/midi";
import { expect } from "chai";
import { starknet } from "hardhat";
import { StarknetContract } from "hardhat/types";
import { unformatObject } from "../utils/unformatObject";
import * as fs from "fs";

let contract: StarknetContract;

describe("Test", function () {
  this.timeout(300_000);

  before(async () => {
    const contractFactory = await starknet.getContractFactory("generated");
    contract = await contractFactory.deploy();
  });

  it("should test", async () => {
    const obj = await contract.call("retrieve_object");
    const converted = unformatObject(obj.object);

    console.log(converted)

    // const json = JSON.stringify(converted);

    // fs.writeFileSync(__dirname + "/result/resut1.json", json);

    // const midi = new Midi();
    // midi.fromJSON(converted);

    // fs.writeFileSync(
    //   __dirname + "/result/resut2.mid",
    //   Buffer.from(midi.toArray())
    // );

    // console.log(midi);
  });
});
