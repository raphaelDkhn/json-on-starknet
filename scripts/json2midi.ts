import { Midi } from "@tonejs/midi";
import * as fs from "fs";
import midiJson from "../midiJSON/test.json";

async function json2midi() {
  const midi = new Midi();
  //@ts-ignore
  midi.fromJSON(midiJson);

  fs.writeFileSync("midi/output1.mid", Buffer.from(midi.toArray()));

  console.log("done");
}

json2midi()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
