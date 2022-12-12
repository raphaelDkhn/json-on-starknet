export function addValuesToStructs(obj: any, indent: string) {
  let result = "";

  for (const key in obj) {
    const value = obj[key];

    // if the value is an object, convert it recursively and append it to the result
    if (typeof value === "object") {
      result += `${indent}${key.charAt(0).toLowerCase() + key.slice(1)} = ${
        key.charAt(0).toUpperCase() + key.slice(1)
      }(\n`;
      result += addValuesToStructs(value, `${indent}\t`);
      result += `${indent}),\n`;
    } else {
      // if the value is not an object, simply append it to the result
      result += `${indent}${
        key.charAt(0).toLowerCase() + key.slice(1)
      } = ${value},\n`;
    }
  }

  return result;
}
