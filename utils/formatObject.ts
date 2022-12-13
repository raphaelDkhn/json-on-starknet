import { randomBytes } from "crypto";
import { decimals } from "./constants";
import { HardhatRuntimeEnvironment } from "hardhat/types";

export function splitLongString(
  longString: string,
  hre: HardhatRuntimeEnvironment
): { [key: string]: BigInt } {
  const result: { [key: string]: BigInt } = {};
  const substrings = longString.match(/.{1,31}/g) || [];
  substrings.forEach((substring, index) => {
    result[`LongStr_Element${index}`] =
      hre.starknet.shortStringToBigInt(substring);
  });

  return result;
}

export function formatObject(obj: any, hre: HardhatRuntimeEnvironment): any {
  const convertedObj: any = {};

  for (const key of Object.keys(obj)) {
    const value = obj[key];

    switch (true) {
      case Array.isArray(value):
        if (value.length > 0) {
          const randomValue = randomBytes(10).toString("hex");
          convertedObj[`Arr_${randomValue}_${key}`] = {};
          for (let i = 0; i < value.length; i++) {
            switch (true) {
              case Array.isArray(value[i]):
                convertedObj[`Arr_${randomValue}_${key}`][
                  `Ele${i}_arr_${randomValue}`
                ] = formatObject(value[i], hre);
                break;
              case typeof value[i] === "object":
                convertedObj[`Arr_${randomValue}_${key}`][
                  `Ele${i}_obj_${randomValue}`
                ] = formatObject(value[i], hre);
                break;
              case typeof value[i] === "string":
                if (value[i].length < 32 && value[i].length > 0) {
                  convertedObj[`Arr_${randomValue}_${key}`][
                    `Ele${i}_shortStr_${randomValue}`
                  ] = hre.starknet.shortStringToBigInt(value[i]);
                } else if (value[i].length > 31) {
                  convertedObj[`Arr_${randomValue}_${key}`][
                    `Ele${i}_longStr_${randomValue}`
                  ] = splitLongString(value[i], hre);
                }
                break;
              case typeof value[i] === "boolean":
                convertedObj[`Arr_${randomValue}_${key}`][
                  `Ele${i}_bool_${randomValue}`
                ] = value[i] == true ? 1n : 0n;
                break;
              case typeof value[i] === "number":
                convertedObj[`Arr_${randomValue}_${key}`][
                  `Ele${i}_num_${randomValue}`
                ] = BigInt(value[i] * decimals);
                break;
            }
          }
        } else if (value.length == 0) {
          convertedObj[`EmptyArr_${key}`] =
            hre.starknet.shortStringToBigInt("_empty");
        }
        break;
      case typeof value === "object":
        if (Object.keys(value).length != 0) {
          const randomValue = randomBytes(10).toString("hex");

          // If the value is an object, recursively convert its arrays to objects
          convertedObj[`Obj_${randomValue}_${key}`] = formatObject(value, hre);
        }
        break;
      case typeof value === "string":
        if (value.length < 32 && value.length > 0) {
          convertedObj[`ShortStr_${key}`] =
            hre.starknet.shortStringToBigInt(value);
        } else if (value.length > 31) {
          convertedObj[`LongStr_${key}`] = splitLongString(value, hre);
        }
        break;
      case typeof value === "boolean":
        convertedObj[`Bool_${key}`] = value == true ? 1n : 0n;
        break;
      case typeof value === "number":
        convertedObj[`Num_${key}`] = BigInt(value * decimals);
        break;
    }
  }

  return convertedObj;
}
