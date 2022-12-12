import { Midi } from "@tonejs/midi";
import * as fs from "fs";

async function midi2json() {
  const file = fs.readFileSync("midi-files/simple_o.mid");
  const midi = new Midi(file);
  const json = JSON.stringify(midi);

  fs.writeFileSync("midi-json/simple_o.json", json);

  console.log("done");
}

midi2json()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
