<template>
  <div class="piano-container">
    <p>
      {{ title }}
      <button @click="play" v-if="!interactive" class="play-button">▶</button>
    </p>
    <div @mouseover="this.hovered = true" @mouseleave="this.hovered = false">
      <Layout
        :pparams="pparams"
        :key_data="key_data"
        :hovered="hovered"
        :labels="labels"
        :stickers="stickers"
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
    labels: { type: Array, default: () => [] },
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
      stickers: Array(this.notes).fill(0),
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
        interactive: this.interactive,
        min_interactive: this.min_interactive,
        max_interactive: this.max_interactive,
      };
    },
  },
  methods: {
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

      let part = new Tone.Part(
        (time, val) => {
          if ("note" in val) {
            let note = val.note;
            if (this.scale_locked) {
              note = this.scale_to_step(note);
            }
            if (val.octave) {
              note = note + 12 * val.octave;
            }
            // key press event
            if (val.type === 0) {
              // sound
              synth.triggerAttackRelease(
                this.step_to_hz(note),
                val.duration * (60 / this.bpm)
              );
              // key press data
              this.key_data[note + this.keynum] = 1;
              setTimeout(() => {
                this.key_data[note + this.keynum] = 0;
              }, 1000 * (60 / this.bpm) * val.duration - 70);
            }
            // sticker event
            else {
              this.stickers[note + this.keynum] = val.params.toString();
              setTimeout(() => {
                this.stickers[note + this.keynum] = 0;
              }, 1000 * (60 / this.bpm) * val.duration);
            }
            // end of music data
          } else {
            this.$store.commit("setplay", false);
          }
        },
        // convert array to object data
        this.music_data.map((val) => {
          return {
            time: val[0] * (60 / this.bpm),
            duration: val[1],
            note: val[2],
            octave: val[3],
            type: val[4],
            params: val[5] ? val[5] : 0,
          };
        })
      );

      part.start(0);
      Tone.Transport.start(Tone.now());
      this.$store.commit("setplay", true);
    },
    play_key(key) {
      this.key_input = key;
      this.$emit("selectkey", key);
      this.play();
    },
  },
};
</script>

<style scoped>
.play-button {
  font-size: 20px;
}
</style>