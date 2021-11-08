<template>
  <h1>Piano :)</h1>
  <button @click="play" v-if="!interactive">CLICK</button>
  <BlackLetters :octaves="2" v-if="interactive" @selectkey="play_key" />
  <Keys :key_data="key_data" :octaves="2" />
  <WhiteLetters :octaves="2" v-if="interactive" @selectkey="play_key" />
</template>

<script>
import * as Tone from "tone";
import Keys from "./Keys.vue";
import WhiteLetters from "./WhiteLetters.vue";
import BlackLetters from "./BlackLetters.vue";

export default {
  name: "Piano",
  components: {
    Keys,
    WhiteLetters,
    BlackLetters,
  },
  props: {
    bpm: Number,
    interactive: Boolean,
    key_preset: Number,
    music_data: Array,
  },
  data: function () {
    return {
      key_data: Array(25).fill(0),
      key_input: 0,
    };
  },
  computed: {
    keyhz() {
      return 130.82 * Math.pow(1.0594631, this.keynum);
    },
    keynum() {
      if (this.interactive) {
        return this.key_input;
      } else {
        return this.key_preset;
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
      this.key_data = Array(25).fill(0);
      let synth = new Tone.PolySynth().toDestination();
      Tone.Transport.cancel(0);

      let part = new Tone.Part((time, val) => {
        if (!Array.isArray(val.chord)) {
          val.chord = [val.chord];
        }
        for (let note of val.chord) {
          synth.triggerAttackRelease(
            this.to_key(note),
            this.to_div(val.duration)
          );
          this.key_data[this.to_half_steps(note) + this.keynum] = 1;
          setTimeout(() => {
            this.key_data[this.to_half_steps(note) + this.keynum] = 0;
          }, 800 * (60 / this.bpm) * val.duration);
        }
      }, this.music_data);
      Tone.Transport.bpm.value = this.bpm;
      part.start(Tone.now());
      Tone.Transport.start();
    },
    play_key(key) {
      this.key_input = key;
      this.play();
    },
  },
};
</script>