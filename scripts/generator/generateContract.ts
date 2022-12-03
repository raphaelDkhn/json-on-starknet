import * as fs from "fs";
import { Midi } from "@tonejs/midi";
import midiJSON from "../../midiJSON/test.json";
import { generateStructs } from "./generateStructs";
import { generateRetrieveFunction } from "./generateRetrieveFunction";

const path = "contracts/generated.cairo";
const midi = new Midi();
//@ts-ignore
midi.fromJSON(midiJSON);
const header = midi.header;
const tracks = midi.tracks;
const duration = midi.duration

async function writeInFile(path: string, data: string) {
  await fs.promises.writeFile(path, `${data}\n`, {
    flag: "w",
  });
}

async function generateContract() {
  const contractTop = [
    "// SPDX-License-Identifier: MIT\n",
    "\n%lang starknet\n",
    "\n//===============================================\n",
    "//=========== GENERATED CAIRO PROGRAM ===========\n",
    "//===============================================\n",
    "\nfrom starkware.cairo.common.cairo_builtins import HashBuiltin\n",
  ];

  const structs = generateStructs(header, tracks);
  const retrieveFunction = generateRetrieveFunction(duration, header, tracks);
  const array = [...contractTop, ...structs, ...retrieveFunction];
  await writeInFile(path, array.join(""));
}

generateContract()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
