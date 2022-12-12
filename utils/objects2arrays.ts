export function convertObjectsToArrays(obj: any): any {
  // Create a new object to store the converted values
  const convertedObj: any = {};

  // Loop over the keys in the original object
  for (const key of Object.keys(obj)) {
    // Get the value for the current key
    const value = obj[key];

    // Check if the value is an object
    if (typeof value === "object") {
      // Check if the object has keys of the form "elementN"
      const keys = Object.keys(value);
      const isArrayObject = keys.every((k) => k.startsWith("element"));

      if (isArrayObject) {
        // If the object is an array object, create a new array to store the converted values
        convertedObj[key] = [];

        // Loop over the keys in the object and add their values to the array
        for (const k of keys) {
          // If the value is itself an object, recursively convert its array objects to arrays
          if (typeof value[k] === "object") {
            convertedObj[key].push(convertObjectsToArrays(value[k]));
          } else {
            convertedObj[key].push(value[k]);
          }
        }
      } else {
        // If the value is a regular object, recursively convert its array objects to arrays
        convertedObj[key] = convertObjectsToArrays(value);
      }
    } else {
      // Otherwise, just set the value as-is
      convertedObj[key] = value;
    }
  }

  return convertedObj;
}
