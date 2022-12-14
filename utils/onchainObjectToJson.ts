import { starknet } from "hardhat";
import { decimals } from "./constants";

function getLongString(longStringObject: { [key: string]: BigInt }): string {
  return Object.values(longStringObject)
    .map((bigInt) => starknet.bigIntToShortString(bigInt))
    .join("");
}

export function onchainObjectToJson(obj: any): any {
  const originalObj: any = {};

  for (const key of Object.keys(obj)) {
    const value = obj[key];
    const originalKey = key.slice(key.lastIndexOf("_") + 1);

    const formatValue = (val: any, valType: string): any => {
      switch (valType) {
        case "obj":
          return onchainObjectToJson(val);
        case "shortStr":
          return starknet.bigIntToShortString(val);
        case "longStr":
          return getLongString(val);
        case "bool":
          return val == true;
        case "num":
          return Number(val) / decimals;
        case "arr":
          return Object.keys(val).map((property) =>
            formatValue(val[property], property.split("_")[1])
          );
        case "emptyArr":
          return [];
      }
    };

    originalObj[originalKey] = key.startsWith("arr_")
      ? formatValue(value, "arr")
      : formatValue(value, key.slice(0, key.indexOf("_")));
  }

  return originalObj;
}

