
# Represent JSON Object On Starknet 💫

An experimental project for representing any JSON data structure as a [Starknet](https://starkware.co/starknet/) smart contract. It demonstrates the feasibility of hosting complex objects, such as MIDI compositions, in smart contracts


## How to run the project? 

Install modules defined in package.json
```
npm install
```

Create a temporary environment
```
nix-shell
```




## Generate a contract
To represent a JSON object as a Starknet smart contract:
- Create a new folder and place the JSON file in it.
- Run the following command:
```
npx hardhat generateContract <path-to-json-file> <name-of-generated-file>
```
This will generate a new cairo file with the specified name in contracts folder.

### Example:
```
npx hardhat generateContract example/input/midi.json midi-generated
```



## Retrieve onchain object
Once your contract is deployed, you can call the smart contract's `retrieve_object` function to get a representation of your original JSON object. 
To convert this object back to a JSON style, you can use the [onchainObjectToJSON](https://github.com/raphaelDkhn/json2starknet/blob/main/utils/onchainObjectToJson.ts) function.
## Feedback

If you have any comments, suggestions, or encounter any problems, please let me know. You can submit your feedback by creating an issue on this repository, or you can contact me on Twitter at [@raphael_dkhn](https://twitter.com/raphael_dkhn). Thank you for your support!
## Acknowledgements

 - [3d-asset-on-starknet by guiltygyoza](https://github.com/guiltygyoza/3d-asset-on-starknet)
 - [json2ts](https://github.com/GregorBiswanger/json2ts)

