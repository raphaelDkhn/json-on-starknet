import { starknet } from "hardhat";
import { indexOf } from "underscore";
import { decimals } from "./constants";

function getLongString(longStringObject: { [key: string]: BigInt }): string {
  return Object.values(longStringObject)
    .map((bigInt) => starknet.bigIntToShortString(bigInt))
    .join("");
}

export function unformatObject(obj: any): any {
  const originalObj: any = {};

  for (const key of Object.keys(obj)) {
    const value = obj[key];

    const originalKey = key.slice(key.lastIndexOf("_") + 1);

    if (key.startsWith("arr_")) {
      originalObj[originalKey] = [];
      for (const eleKey of Object.keys(value)) {
        const eleValue = value[eleKey];
        if (eleKey.startsWith(`ele`)) {
          const eleKeyParts = eleKey.split("_");
          const index = parseInt(eleKeyParts[0].replace("ele", ""));
          const eleValueType = eleKeyParts[1];

          if (eleValueType === "obj") {
            originalObj[originalKey][index] = unformatObject(eleValue);
          } else if (eleValueType === "shortStr") {
            originalObj[originalKey][index] =
              starknet.bigIntToShortString(eleValue);
          } else if (eleValueType === "longStr") {
            originalObj[originalKey][index] = getLongString(eleValue);
          } else if (eleValueType === "bool") {
            originalObj[originalKey][index] = eleValue == true;
          } else if (eleValueType == "num") {
            originalObj[originalKey][index] = Number(eleValue) / decimals;
          } else if (eleValueType == "undefined") {
            originalObj[originalKey][index] = undefined;
          }
        }
      }
    } else if (key.startsWith("obj_")) {
      originalObj[originalKey] = unformatObject(value);
    } else if (key.startsWith("emptyArr_")) {
      originalObj[originalKey] = [];
    } else if (key.startsWith("shortStr_")) {
      originalObj[originalKey] = starknet.bigIntToShortString(value);
    } else if (key.startsWith("longStr_")) {
      originalObj[originalKey] = getLongString(value);
    } else if (key.startsWith("bool_")) {
      originalObj[originalKey] = value == true;
    } else if (key.startsWith("num_")) {
      originalObj[originalKey] = Number(value) / decimals;
    } else if (key.startsWith("undefined_")) {
      originalObj[originalKey] = undefined;
    }
  }

  return originalObj;
}
