import * as fs from "fs";
import { Midi } from "@tonejs/midi";
import midiJSON from "../midiJSON/test.json";

const path = "contracts/generated.cairo";

async function write(path: string, data: string) {
  await fs.promises.writeFile(path, `${data}\n`, {
    flag: "a",
  });
}

function generateStructs() {
  const midi = new Midi();
  //@ts-ignore
  midi.fromJSON(midiJSON);
  const header = midi.header;
  const tracks = midi.tracks;

  //**======== SET STRUCT ARRAYS ========**//
  let structTimeSignature: string[] | undefined;
  let structTimeSignatureEvent: string[] | undefined;
  let structTimeSignatures: string[] | undefined;
  let structTempoEvent: string[] | undefined;
  let structTempos: string[] | undefined;
  let structHeader: string[] | undefined;
  let structNote: string[] | undefined;
  let structNotes: string[] | undefined;
  let structInstrument: string[] | undefined;
  let structTrack: string[] | undefined;
  let structTracks: string[] | undefined;
  let structMIDI: string[] | undefined;
  let structs: string[];

  structMIDI = ["\nstruct MIDI {\n", "\tduration: felt,\n"];

  //**======== HEADER ========**//
  if (header) {
    structMIDI.push("\theader: Header,\n");

    structHeader = [
      "\nstruct Header {\n",
      "\tname: felt,\n",
      "\ttempos: Tempos,\n",
      "\ttimeSignatures: TimeSignatures,\n",
      "\tppq: felt,\n",
      "}\n",
    ];

    if (header.tempos) {
      structTempoEvent = [
        "\nstruct TempoEvent {\n",
        "\tbpm: felt,\n",
        "\tticks: felt,\n",
        "}\n",
      ];

      structTempos = ["\nstruct Tempos {\n"];
      for (let index = 0; index < header.tempos.length; index++) {
        structTempos.push(`\telement${index}: TempoEvent,\n`);
      }
      structTempos.push("}\n");
    }
    if (header.timeSignatures) {
      structTimeSignature = [
        "\nstruct TimeSignature {\n",
        "\tnumerator: felt,\n",
        "\tdenominator: felt,\n",
        "}\n",
      ];

      structTimeSignatureEvent = [
        "\nstruct TimeSignatureEvent {\n",
        "\tticks: felt,\n",
        "\ttimeSignature: TimeSignature,\n",
        "}\n",
      ];

      structTimeSignatures = ["\nstruct TimeSignatures {\n"];
      for (let index = 0; index < header.timeSignatures.length; index++) {
        structTimeSignatures.push(`\telement${index}: TimeSignatureEvent,\n`);
      }
      structTimeSignatures.push("}\n");
    }
  }

  //**======== TRACKS ========**//
  if (tracks) {
    structMIDI.push("\ttracks: Tracks,\n");

    structNote = [
      "\nstruct Note {\n",
      "\tmidi: felt,\n",
      "\ttime: felt,\n",
      "\tticks: felt,\n",
      "\tname: felt,\n",
      "\tpitch: felt,\n",
      "\toctave: felt,\n",
      "\tvelocity: felt,\n",
      "\tduration: felt,\n",
      "}\n",
    ];

    structInstrument = [
      "\nstruct Instrument {\n",
      "\tnumber: felt,\n",
      "\tfamily: felt,\n",
      "\tname: felt,\n",
      "\tpercussion: felt,\n",
      "}\n",
    ];

    structTracks = ["\nstruct Tracks {\n"];
    structNotes = [];
    structTrack = [];
    tracks.map((track, index) => {
      structNotes?.push(`\nstruct Notes_T${index} {\n`);
      for (let i = 0; i < track.notes.length; i++) {
        structNotes?.push(`\telement${i}: Note,\n`);
      }
      structNotes?.push("}\n");

      structTrack?.push(
        `\nstruct Track_${index} {\n`,
        "\tname: felt,\n",
        "\tchannel: felt,\n",
        `\tnotes: Notes_T${index},\n`,
        "\tinstrument: Instrument,\n",
        "}\n"
      );

      structTracks?.push(`\telement${index}: Track_${index},\n`);
    });
    structTracks.push("}\n");
  }

  structMIDI.push("}\n");

  structs = [
    ...structTimeSignature!,
    ...structTimeSignatureEvent!,
    ...structTimeSignatures!,
    ...structTempoEvent!,
    ...structTempos!,
    ...structHeader!,
    ...structNote!,
    ...structNotes!,
    ...structInstrument!,
    ...structTrack!,
    ...structTracks!,
    ...structMIDI,
  ];

  return structs;
}

function generateRetrieveFunction() {
  const retrieveMidiStart = [
    "\n@view\n",
    "func retrieve_midi {\n",
    "\tsyscall_ptr : felt*,\n",
    "\tpedersen_ptr : HashBuiltin*,\n",
    "\trange_check_ptr\n",
    "} () -> (midi: MIDI) {\n",
    "\n\t// build up the struct from bottom up\n",
    "\n\tlet midi = MIDI (\n",
  ];
  const retrieveMidiEnd = ["\t);\n", "\n\treturn(midi,);\n", "}"];
}

async function cairoGenerator() {
  const contractTop = [
    "// SPDX-License-Identifier: MIT\n",
    "\n%lang starknet\n",
    "\n//===============================================\n",
    "//======== GENERATED CAIRO PROGRAM BELOW ========\n",
    "//===============================================\n",
    "\nfrom starkware.cairo.common.cairo_builtins import HashBuiltin\n",
  ];

  const structs = generateStructs();

  const array = [...contractTop, ...structs];

  //console.log(array);

  //const array = ["hello\n", "world\n", "\n!"];
  await write(path, array.join(""));
}

cairoGenerator()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
