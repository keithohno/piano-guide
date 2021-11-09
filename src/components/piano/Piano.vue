<template>
  <button @click="play" v-if="!interactive" class="play-button">▶</button>
  <div :class="{ 'p-labeled': labels, 'p-unlabeled': !labels }">
    <BlackLetters
      :octaves="octaves"
      v-if="interactive"
      :labels="labels"
      @selectkey="play_key"
    />
    <Keys :key_data="key_data" :octaves="octaves" :labels="labels" />
    <WhiteLetters
      :octaves="octaves"
      v-if="interactive"
      :labels="labels"
      @selectkey="play_key"
    />
  </div>
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
    id: String,
    bpm: { type: Number, default: 120 },
    interactive: { type: Boolean, default: false },
    labels: { type: Boolean, default: false },
    key_preset: { type: Number, default: 0 },
    music_data: Array,
    scale_locked: { type: Boolean, default: false },
    octaves: { type: Number, default: 2 },
  },
  data: function () {
    return {
      key_data: Array(12 * this.octaves + 1).fill(0),
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
    to_hz(note) {
      return this.keyhz * Math.pow(1.0594631, note);
    },
    play() {
      this.key_data = Array(12 * this.octaves + 1).fill(0);
      let synth = new Tone.PolySynth().toDestination();
      Tone.Transport.cancel(0);

      let part = new Tone.Part((time, val) => {
        if (!Array.isArray(val.chord)) {
          val.chord = [val.chord];
        }
        for (let note of val.chord) {
          // octave modifier
          if (Array.isArray(note)) {
            if (this.scale_locked) {
              note = this.to_half_steps(note[0]) + 12 * note[1];
            } else {
              note = note[0] + 12 * note[1];
            }
          } else {
            if (this.scale_locked) {
              note = this.to_half_steps(note);
            }
          }
          // sound
          synth.triggerAttackRelease(
            this.to_hz(note),
            this.to_div(val.duration)
          );
          // key graphics
          this.key_data[note + this.keynum] = 1;
          setTimeout(() => {
            this.key_data[note + this.keynum] = 0;
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

<style scoped>
.play-button {
  font-size: 20px;
}
.p-labeled {
  height: 280px;
}
.p-unlabeled {
  height: 180px;
}
</style>