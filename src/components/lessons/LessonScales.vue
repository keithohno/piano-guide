<template>
  <Navbar page="scales" />
  <div class="lesson-container">
    <p>
      A <strong>scale</strong> is a sequence of notes that follows a
      half-half-whole-half-half-half-whole series of steps. Each scale begins
      and ends on the same note, one octave apart. Try playing a few scales
      using the demo below. Notice that the 'C scale' only uses the white keys
      of the piano.
    </p>
    <Piano
      title="Scale Demo"
      :notes="24"
      :interactive="true"
      :max_interactive="11"
      :scale_locked="true"
      :keypress_data="scale.keypress"
    />
    <p>
      The specific spacing for notes on a scale turns out to be fundamental to
      the construction of melodies (this will be explored later on). In the
      meantime, we can assign numbers from 1 to 7 for each note of a scale. The
      final note of the scale is called 1, because it is the base note of the
      scale (1) raised by an octave.
    </p>
    <Piano
      title="Scale Demo with Numberings"
      :notes="24"
      :interactive="true"
      :max_interactive="11"
      :scale_locked="true"
      :keypress_data="scale.keypress"
      :labels="labels"
      @selectkey="handle_selectkey"
    />
  </div>
</template>

<script>
import Piano from "../piano/Piano.vue";
import scale from "./music/scale.js";
import Navbar from "../Navbar.vue";
import labels from "./data/labels.js";

export default {
  name: "Lesson4",
  components: {
    Piano,
    Navbar,
  },
  computed: {
    labels() {
      if (this.key === null) {
        return [];
      }
      return labels.scalenums
        .concat(labels.scalenums)
        .concat(labels.scalenums)
        .slice(12 - this.key, 36 - this.key);
    },
  },
  data: function () {
    return {
      scale,
      key: null,
    };
  },
  methods: {
    handle_selectkey(key) {
      this.key = key;
    },
  },
};
</script>