import { Header, Track } from "@tonejs/midi";

export function generateStructs(header: Header, tracks: Track[]) {
  //**======== SET STRUCT ARRAYS ========**//
  let structTimeSignature: string[] = new Array();
  let structTimeSignatureEvent: string[] = new Array();
  let structTimeSignatures: string[] = new Array();
  let structTempoEvent: string[] = new Array();
  let structTempos: string[] = new Array();
  let structHeader: string[] = new Array();
  let structNote: string[] = new Array();
  let structNotes: string[] = new Array();
  let structInstrument: string[] = new Array();
  let structTrack: string[] = new Array();
  let structTracks: string[] = new Array();
  let structMIDI: string[] = new Array();
  let structs: string[];

  structMIDI.push("\nstruct MIDI {\n", "\tduration: felt,\n");

  //**======== HEADER ========**//
  if (header) {
    structMIDI.push("\theader: Header,\n");

    structHeader.push(
      "\nstruct Header {\n",
      "\ttempos: Tempos,\n",
      "\ttimeSignatures: TimeSignatures,\n",
      "\tppq: felt,\n",
      "}\n"
    );

    if (header.tempos) {
      structTempoEvent.push(
        "\nstruct TempoEvent {\n",
        "\tbpm: felt,\n",
        "\tticks: felt,\n",
        "}\n"
      );

      structTempos.push("\nstruct Tempos {\n");

      for (let index = 0; index < header.tempos.length; index++) {
        structTempos.push(`\telement${index}: TempoEvent,\n`);
      }

      structTempos.push("}\n");
    }

    if (header.timeSignatures) {
      structTimeSignature.push(
        "\nstruct TimeSignature {\n",
        "\tnumerator: felt,\n",
        "\tdenominator: felt,\n",
        "}\n"
      );

      structTimeSignatureEvent.push(
        "\nstruct TimeSignatureEvent {\n",
        "\tticks: felt,\n",
        "\ttimeSignature: TimeSignature,\n",
        "}\n"
      );

      structTimeSignatures.push("\nstruct TimeSignatures {\n");

      for (let index = 0; index < header.timeSignatures.length; index++) {
        structTimeSignatures.push(`\telement${index}: TimeSignatureEvent,\n`);
      }

      structTimeSignatures.push("}\n");
    }
  }

  //**======== TRACKS ========**//
  if (tracks) {
    structMIDI.push("\ttracks: Tracks,\n");

    structNote.push(
      "\nstruct Note {\n",
      "\tmidi: felt,\n",
      "\ttime: felt,\n",
      "\tticks: felt,\n",
      "\tname: felt,\n",
      "\tpitch: felt,\n",
      "\toctave: felt,\n",
      "\tvelocity: felt,\n",
      "\tduration: felt,\n",
      "}\n"
    );

    structInstrument.push(
      "\nstruct Instrument {\n",
      "\tnumber: felt,\n",
      "\tfamily: felt,\n",
      "\tpercussion: felt,\n",
      "}\n"
    );

    structTracks.push("\nstruct Tracks {\n");

    tracks.map((track, index) => {
      structNotes.push(`\nstruct Notes_T${index} {\n`);

      for (let i = 0; i < track.notes.length; i++) {
        structNotes?.push(`\telement${i}: Note,\n`);
      }

      structNotes.push("}\n");

      structTrack.push(
        `\nstruct Track_${index} {\n`,
        "\tchannel: felt,\n",
        `\tnotes: Notes_T${index},\n`,
        "\tinstrument: Instrument,\n",
        "}\n"
      );

      structTracks.push(`\telement${index}: Track_${index},\n`);
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
