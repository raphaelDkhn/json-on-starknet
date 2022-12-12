import * as _ from "underscore";

export class Object2Structs {
  convert(content: object): string {
    return this.convertObjectToStruct(content);
  }

  private convertObjectToStruct(
    jsonContent: any,
    objectName: string = "Root"
  ): string {
    let objectResult: string[] = [];

    for (let key in jsonContent) {
      let value = jsonContent[key];

      if (_.isObject(value)) {
        let childObjectName = this.toUpperFirstLetter(key);
        objectResult.push(this.convertObjectToStruct(value, childObjectName));
        jsonContent[key] = childObjectName + ",";
      } else {
        jsonContent[key] = "felt,";
      }
    }

    let result = this.formatChars(jsonContent, objectName);
    objectResult.push(result);

    return objectResult.join("\n\n");
  }

  private formatChars(jsonContent: any, objectName: string): string {
    let result = JSON.stringify(jsonContent, null, "\t")
      .replace(new RegExp('"', "g"), "")
      .replace(new RegExp(",,", "g"), ",");

    let allKeys = _.allKeys(jsonContent);
    for (let index = 0, length = allKeys.length; index < length; index++) {
      let key = allKeys[index];

      result = result.replace(
        new RegExp(key + ":", "g"),
        this.toLowerFirstLetter(key) + ":"
      );
    }

    return "struct " + objectName + " " + result;
  }

  private toUpperFirstLetter(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  private toLowerFirstLetter(text: string) {
    return text.charAt(0).toLowerCase() + text.slice(1);
  }
}
