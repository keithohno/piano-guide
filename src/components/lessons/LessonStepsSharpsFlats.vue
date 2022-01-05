<template>
  <Navbar page="steps_sharps_flats" />
  <div class="lesson-container">
    <p>
      Previously, we assigned letter names from A to G for all the white notes
      of a piano. To extend this naming system to the black keys, we introduce
      the notation of steps, sharps, and flats. A <strong>half-step</strong> is
      the space between any two consecutive notes on a piano. From E to F is a
      half-step. From G to the black key between G and A is a half-step.
      Similarly, a <strong>whole-step</strong> is the combination of two
      half-steps.
    </p>
    <Piano
      title="Half Step Demo"
      :notes="12"
      :interactive="true"
      :max_interactive="10"
      :music_data="[
        { time: '0:0', note: 0, duration: 1 },
        { time: '0:1', note: 1, duration: 1 },
        { time: '0:2' },
      ]"
    />
    <Piano
      title="Whole Step Demo"
      :notes="12"
      :interactive="true"
      :max_interactive="9"
      :music_data="[
        { time: '0:0', note: 0, duration: 1 },
        { time: '0:1', note: 2, duration: 1 },
        { time: '0:2' },
      ]"
    />
    <p>
      <strong>Sharps</strong> (#) raise the pitch of a note by one half-step.
      <strong>Flats</strong> (♭) lower the pitch of a note by one half-step.
      This allows us to assign names to the black keys of a piano as follows:
    </p>
    <Piano
      title="Sharps and Flats, Labeled"
      :key_preset="0"
      :music_data="chromatic"
      :labels="labels"
    />
    <p>
      The sharp # or flat ♭ is always placed after the note it 'modifies,' and
      is always read as written (e.g. C# is 'C sharp').
    </p>
  </div>
</template>

<script>
import Piano from "../piano/Piano.vue";
import Navbar from "../Navbar.vue";
import chromatic from "./music/chromatic.js";
import labels from "./data/labels.js";

export default {
  name: "Lesson3",
  components: {
    Piano,
    Navbar,
  },
  data: function () {
    return {
      chromatic: chromatic.data,
      labels: labels.allkeys,
    };
  },
};
</script>