<template>
  <Navbar page="keys" />
  <div class="lesson-container">
    <p>
      Chances are, at some point in the past, you've noticed that the same song
      can be sung higher or lower, depending on which note you start on. This is
      because melodies depend on the spaces between notes, not the notes
      themselves. We can 'shift' a melody upwards or downwards by shifting each
      note by the same amount. Doing this maintains the distances between
      successive tones. We call this a change of key.
    </p>
    <p>
      The <strong>key</strong> of a piece describes the 'root note' of a melody.
      How exactly the key is defined is a little beyond the scope of this guide,
      but a couple general principles help you find the key in most cases:
    </p>
    <p>
      Principle 1: The key of a piece has a corresponding scale. Most of the
      melody will be contained within the notes of that scale.
    </p>
    <p>Principle 2: The key of a piece is often the last note of the piece.</p>
    <p>
      Shown below is a melody which uses all the white keys (and only the white
      keys) of the piano. Recall that the C scale has the same property. As we
      might expect, this melody is in the key of C:
    </p>
    <Piano
      title="Happy Birthday in C"
      :notes="24"
      :bpm="200"
      :key_preset="12"
      :scale_locked="true"
      :scale_labeled="true"
      :labeled="true"
      :keypress_data="happy"
    />
    <p>
      Notice that we've also numbered the keys following the scale numbering
      pattern discussed earlier. This melody follows the pattern:
    </p>
    <ul>
      <li>5-5-6-5-1-7</li>
      <li>5-5-6-5-2-1</li>
      <li>5-5-5-3-1-7-6</li>
      <li>4-4-3-1-2-1</li>
    </ul>
    <p>
      If we choose another key, write out its scale numbering, and replicate the
      same melody using the pattern above, we will hear the same melody. Try it
      out below:
    </p>
    <Piano
      title="Happy Birthday (different keys)"
      :notes="24"
      :bpm="200"
      :interactive="true"
      :min_interactive="5"
      :max_interactive="16"
      :scale_locked="true"
      :keypress_data="happy"
      :labels="labels"
      @selectkey="handle_selectkey"
    />
    <p>
      The key intuition here is that the spaces between notes are more important
      than the notes themselves. Shifting the notes up and down only changes the
      key.
    </p>
  </div>
</template>

<script>
import Piano from "../piano/Piano.vue";
import Navbar from "../Navbar.vue";
import happy from "./music/happy_birthday.js";
import labels from "./data/labels.js";

export default {
  name: "Lesson5",
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
      happy,
      key: null,
    };
  },
  methods: {
    handle_selectkey(key) {
      this.key = key % 12;
    },
  },
};
</script>