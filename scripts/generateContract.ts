import * as fs from "fs";
import { formatObject } from "../utils/formatObject";
import { Object2Structs } from "../utils/object2structs";
import { HardhatRuntimeEnvironment } from "hardhat/types";

async function writeInFile(fileName: string, data: string) {
  await fs.promises.writeFile(`contracts/${fileName}.cairo`, `${data}\n`);
}

export async function generateContract(
  json: any,
  fileName: string,
  hre: HardhatRuntimeEnvironment
) {
  const obj = JSON.parse(fs.readFileSync(json, "utf-8"));
  const obj2structs = new Object2Structs();

  //format object
  const objectFormatted = formatObject(obj, hre);

  const contractTop = [
    "// SPDX-License-Identifier: MIT\n",
    "\n%lang starknet\n",
    "\n//===============================================\n",
    "//=========== GENERATED CAIRO PROGRAM ===========\n",
    "//===============================================\n",
    "\nfrom starkware.cairo.common.cairo_builtins import HashBuiltin\n\n",
  ];

  //*=========== WRITE RETRIEVE FUNCTION ===========*//

  let functionStart = [
    "\n\n@view\n",
    "func retrieve_object {\n",
    "\tsyscall_ptr : felt*,\n",
    "\tpedersen_ptr : HashBuiltin*,\n",
    "\trange_check_ptr\n",
    "} () -> (object: Root) {\n",
    "\n\t// build up the struct from bottom up\n",
    "\n\tlet object = Root (\n",
  ];

  const addValues = obj2structs.addValues(objectFormatted, "\t\t");

  let functionEnd = ["\t);\n", "\n\treturn(object,);\n", "}"];

  //*=========== WRITE STRUCTS ===========*//

  const structs = obj2structs.convert(objectFormatted);

  const array = [
    ...contractTop,
    ...structs,
    ...functionStart,
    ...addValues,
    ...functionEnd,
  ];

  await writeInFile(fileName, array.join(""));
}
