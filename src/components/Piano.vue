<template>
  <h1>Piano :)</h1>
  <button @click="play">CLICK</button>
</template>

<script>
import * as Tone from "tone";

export default {
  name: "Piano",
  props: {
    bpm: Number,
    key_: Number,
  },
  data: function () {
    return {
      keys: Array,
    };
  },
  computed: {
    keyhz() {
      console.log(this.key_);
      switch (this.key_) {
        default:
        case "C":
          return 261.63;
        case "C#":
        case "Db":
          return 277.18;
        case "D":
          return 293.66;
        case "Eb":
          return 311.13;
        case "E":
          return 329.63;
        case "F":
          return 349.23;
        case "F#":
        case "Gb":
          return 369.99;
        case "G":
          return 392.0;
        case "Ab":
          return 415.3;
        case "A":
          return 440.0;
        case "Bb":
          return 466.16;
        case "B":
        case "Cb":
          return 493.88;
      }
    },
  },
  methods: {
    to_div(duration) {
      switch (duration) {
        default:
        case 1:
          return "4n";
        case 2:
          return "2n";
        case 4:
          return "1n";
      }
    },
    to_key(chord) {
      if (!Array.isArray(chord)) {
        chord = [chord];
      }
      let out_chord = [];
      for (let note of chord) {
        note *= 2;
        if (note < 7) {
          note -= 2;
        } else {
          note -= 3;
        }
        out_chord.push(this.keyhz * Math.pow(1.0594631, note));
      }
      return out_chord;
    },
    play() {
      let synth = new Tone.PolySynth().toDestination();
      Tone.Transport.cancel(0);

      let part = new Tone.Part(
        (time, val) => {
          synth.triggerAttackRelease(
            this.to_key(val.chord),
            this.to_div(val.duration)
          );
        },
        [
          { time: "0:0", chord: 3, duration: 1 },
          { time: "0:1", chord: 2, duration: 1 },
          { time: "0:2", chord: 1, duration: 1 },
          { time: "0:3", chord: 2, duration: 1 },
          { time: "1:0", chord: 3, duration: 1 },
          { time: "1:1", chord: 3, duration: 1 },
          { time: "1:2", chord: 3, duration: 2 },
          { time: "2:0", chord: 2, duration: 1 },
          { time: "2:1", chord: 2, duration: 1 },
          { time: "2:2", chord: 2, duration: 2 },
          { time: "3:0", chord: 3, duration: 1 },
          { time: "3:1", chord: 5, duration: 1 },
          { time: "3:2", chord: 5, duration: 2 },
          { time: "4:0", chord: 3, duration: 1 },
          { time: "4:1", chord: 2, duration: 1 },
          { time: "4:2", chord: 1, duration: 1 },
          { time: "4:3", chord: 2, duration: 1 },
          { time: "5:0", chord: 3, duration: 1 },
          { time: "5:1", chord: 3, duration: 1 },
          { time: "5:2", chord: 3, duration: 1 },
          { time: "5:3", chord: 1, duration: 1 },
          { time: "6:0", chord: 2, duration: 1 },
          { time: "6:1", chord: 2, duration: 1 },
          { time: "6:2", chord: 3, duration: 1 },
          { time: "6:3", chord: 2, duration: 1 },
          { time: "7:0", chord: 1, duration: 4 },
        ]
      );
      Tone.Transport.bpm.value = this.bpm;
      part.start(Tone.now());
      Tone.Transport.start();
    },
  },
};
</script>