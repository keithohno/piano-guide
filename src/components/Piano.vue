<template>
  <h1>Piano :)</h1>
  <button @click="play">CLICK</button>
  <Keys :key_data="key_data" :octaves="2" />
</template>

<script>
import * as Tone from "tone";
import Keys from "./Keys.vue";

export default {
  name: "Piano",
  components: {
    Keys,
  },
  props: {
    bpm: Number,
    key_: Number,
  },
  data: function () {
    return {
      key_data: Array(25).fill(0),
    };
  },
  computed: {
    keyhz() {
      return 130.82 * Math.pow(1.0594631, this.key_);
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
    to_half_steps(scale_num) {
      if (scale_num % 12 < 4) {
        return scale_num * 2 - 2;
      } else {
        return scale_num * 2 - 3;
      }
    },
    to_key(note) {
      note = this.to_half_steps(note);
      return this.keyhz * Math.pow(1.0594631, note);
    },
    play() {
      let synth = new Tone.PolySynth().toDestination();
      Tone.Transport.cancel(0);

      let part = new Tone.Part(
        (time, val) => {
          if (!Array.isArray(val.chord)) {
            val.chord = [val.chord];
          }
          for (let note of val.chord) {
            synth.triggerAttackRelease(
              this.to_key(note),
              this.to_div(val.duration)
            );
            this.key_data[this.to_half_steps(note) + this.key_] = 1;
            setTimeout(() => {
              this.key_data[this.to_half_steps(note) + this.key_] = 0;
            }, 800 * (60 / this.bpm) * val.duration);
          }
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