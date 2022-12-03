import { Header, Track } from "@tonejs/midi";
import { starknet } from "hardhat";
import { decimals } from "../../utils/constants";

export function generateRetrieveFunction(
  duration: number,
  header: Header,
  tracks: Track[]
) {
  let functionStart = [
    "\n@view\n",
    "func retrieve_midi {\n",
    "\tsyscall_ptr : felt*,\n",
    "\tpedersen_ptr : HashBuiltin*,\n",
    "\trange_check_ptr\n",
    "} () -> (midi: MIDI) {\n",
    "\n\t// build up the struct from bottom up\n",
    "\n\tlet midi = MIDI (\n",
    `\t\tduration = ${duration * decimals},\n`,
  ];
  let structHeader: string[] = new Array();
  let structTracks: string[] = new Array();
  let array: string[];

  //**======== HEADER ========**//

  structHeader.push(
    "\t\theader = Header(\n",
    "\t\t\ttempos = Tempos(\n"
  );

  header.tempos.map((element, index) => {
    structHeader.push(
      `\t\t\t\telement${index} = TempoEvent(\n`,
      `\t\t\t\t\tbpm = ${element.bpm * decimals},\n`,
      `\t\t\t\t\tticks = ${element.ticks}\n`,
      "\t\t\t\t),\n"
    );
  });

  structHeader.push("\t\t\t),\n", "\t\t\ttimeSignatures = TimeSignatures(\n");

  header.timeSignatures.map((element, index) => {
    structHeader.push(
      `\t\t\t\telement${index} = TimeSignatureEvent(\n`,
      `\t\t\t\t\tticks = ${element.ticks},\n`,
      "\t\t\t\t\ttimeSignature = TimeSignature(\n",
      `\t\t\t\t\t\tnumerator = ${element.timeSignature[0]},\n`,
      `\t\t\t\t\t\tdenominator = ${element.timeSignature[1]},\n`,
      "\t\t\t\t\t)\n",
      "\t\t\t\t),\n"
    );
  });

  structHeader.push("\t\t\t),\n", `\t\t\tppq = ${header.ppq}\n`, "\t\t),\n");

  //**======== Tracks ========**//

  structTracks.push("\t\ttracks = Tracks(\n");

  tracks.map((track, t_index) => {
    structTracks.push(
      `\t\t\telement${t_index} = Track_${t_index}(\n`,
      `\t\t\t\tchannel = ${track.channel},\n`,
      `\t\t\t\tnotes = Notes_T${t_index}(\n`
    );
    track.notes.map((note, n_index) => {
      structTracks.push(
        `\t\t\t\t\telement${n_index} = Note(\n`,
        `\t\t\t\t\t\tmidi = ${note.midi},\n`,
        `\t\t\t\t\t\ttime = ${note.time * decimals},\n`,
        `\t\t\t\t\t\tticks = ${note.ticks},\n`,
        `\t\t\t\t\t\tname = ${starknet.shortStringToBigInt(note.name)},\n`,
        `\t\t\t\t\t\tpitch = ${starknet.shortStringToBigInt(note.pitch)},\n`,
        `\t\t\t\t\t\toctave = ${note.octave},\n`,
        `\t\t\t\t\t\tvelocity = ${note.velocity * decimals},\n`,
        `\t\t\t\t\t\tduration = ${note.duration * decimals},\n`,
        `\t\t\t\t\t),\n`
      );
    });

    structTracks.push(
      "\t\t\t\t),\n",
      "\t\t\t\tinstrument = Instrument(\n",
      `\t\t\t\t\tnumber = ${track.instrument.number},\n`,
      `\t\t\t\t\tfamily = ${starknet.shortStringToBigInt(
        track.instrument.family
      )},\n`,
      `\t\t\t\t\tpercussion = ${
        track.instrument.percussion == true ? 1 : 0
      },\n`,
      "\t\t\t\t)\n",
      `\t\t\t),\n`
    );
  });

  structTracks.push("\t\t)\n");

  let functionEnd = ["\t);\n", "\n\treturn(midi,);\n", "}"];

  array = [...functionStart, ...structHeader, ...structTracks, ...functionEnd];

  return array;
}
