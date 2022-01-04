<template>
  <div class="piano-container">
    <p>
      {{ title }}
      <button @click="play" v-if="!interactive" class="play-button">▶</button>
    </p>
    <div
      :class="{ 'p-labeled': labeled, 'p-unlabeled': !labeled }"
      @mouseover="this.hovered = true"
      @mouseleave="this.hovered = false"
    >
      <Layout
        :pparams="pparams"
        :key_data="key_data"
        :hovered="hovered"
        @selectkey="play_key"
      />
    </div>
  </div>
</template>

<script>
import * as Tone from "tone";
import Layout from "./Layout.vue";

export default {
  name: "Piano",
  components: {
    Layout,
  },
  props: {
    id: String,
    title: String,
    bpm: { type: Number, default: 120 },
    notes: { type: Number, default: 12 },
    base_octave: { type: Number, default: 0 },
    interactive: { type: Boolean, default: false },
    min_interactive: { type: Number, default: 0 },
    max_interactive: { type: Number, default: 100 },
    labeled: { type: Boolean, default: false },
    scale_labeled: { type: Boolean, default: false },
    key_preset: { type: Number, default: 0 },
    scale_locked: { type: Boolean, default: false },
    music_data: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data: function () {
    return {
      key_data: Array(this.notes).fill(0),
      key_input: 0,
      hovered: false,
    };
  },
  computed: {
    keyhz() {
      return (
        261.64 *
        Math.pow(1.0594631, this.keynum) *
        Math.pow(2, this.base_octave)
      );
    },
    keynum() {
      if (this.interactive) {
        return this.key_input;
      } else {
        return this.key_preset;
      }
    },
    pparams() {
      return {
        notes: this.notes,
        labeled: this.labeled,
        interactive: this.interactive,
        min_interactive: this.min_interactive,
        max_interactive: this.max_interactive,
      };
    },
  },
  methods: {
    duration_to_div(duration) {
      switch (duration) {
        default:
        case 1:
          return "4n";
        case 2:
          return "2n";
        case 3:
          return "2n.";
        case 4:
          return "1n";
        case 0.5:
          return "8n";
        case 1.5:
          return "4n.";
        case 0.67:
          return "4t";
        case 1.33:
          return "2t";
        case 2.67:
          return "1t";
      }
    },
    scale_to_step(scale_num) {
      scale_num -= 1;
      let octaves = Math.floor(scale_num / 7);
      scale_num %= 7;
      if (scale_num < 3) {
        scale_num *= 2;
      } else {
        scale_num = 2 * scale_num - 1;
      }
      return 12 * octaves + scale_num;
    },
    step_to_hz(note) {
      return this.keyhz * Math.pow(1.0594631, note);
    },
    play() {
      this.key_data = Array(this.notes).fill(0);
      Tone.Transport.stop();
      Tone.Transport.position = 0;
      Tone.Transport.cancel(0);
      let synth = new Tone.PolySynth().toDestination();

      let part = new Tone.Part((time, val) => {
        if ("note" in val) {
          let note = val.note;
          if (this.scale_locked) {
            note = this.scale_to_step(note);
          }
          if (val.octave) {
            note = note + 12 * val.octave;
          }
          // sound
          synth.triggerAttackRelease(
            this.step_to_hz(note),
            this.duration_to_div(val.duration)
          );
          // key graphics
          this.key_data[note + this.keynum] = 1;
          setTimeout(() => {
            this.key_data[note + this.keynum] = 0;
          }, 1000 * (60 / this.bpm) * val.duration - 70);
        } else {
          this.$store.commit("setplay", false);
        }
      }, this.music_data);

      Tone.Transport.bpm.value = this.bpm;
      part.start(0);
      Tone.Transport.start(Tone.now());
      this.$store.commit("setplay", true);
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
.piano-container {
  zoom: 0.7;
  -moz-transform: scale(0.7);
}
</style>