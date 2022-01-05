<template>
  <Navbar page="notes" />
  <div class="lesson-container">
    <p>
      In western music, all sounds and tones are divided into a set of twelve
      notes. On the piano, these twelve notes are represented as seven white and
      five black keys. The seven white keys have letter names from A to G, as
      shown below:
    </p>
    <Piano
      title="The 12 Notes"
      :bpm="160"
      :key_preset="0"
      :music_data="this.chromatic"
      :labels="labels"
    />
    <p>
      Notice that the <strong>pitch</strong> of the sound changes from each note
      to the next. The notes towards the left are more deep and resounding. The
      notes towards the right are more shrill and piercing. We refer to these
      notes as having 'lower' and 'higher' pitch (relative to each other).
    </p>
    <p>
      On a piano, this same pattern of twelve notes is repeated multiple times.
      This happens because the basic sound of any lettered note (e.g. F or G)
      can be replicated at higher or lower pitches. To see this in action, try
      the demo below:
    </p>
    <Piano
      title="Octave Demo"
      :notes="24"
      :interactive="true"
      :max_interactive="11"
      :music_data="[
        { time: '0:0', note: 0, duration: 1 },
        { time: '0:1', note: 12, duration: 1 },
        { time: '0:3', note: 0, octave: 0, duration: 2 },
        { time: '0:3', note: 0, octave: 1, duration: 2 },
        { time: '1:1' },
      ]"
      :labels="labels.concat(labels)"
    />
    <p>
      An <strong>octave</strong> is the interval, or distance, between two of
      the same lettered note.
    </p>
    <ul>
      <li>
        Usage 1: We say that the same notes are repeated on different 'octaves'
        of the piano.
      </li>

      <li>
        Usage 2: Playing two notes that are at an octave distance apart is
        called 'playing octaves'
      </li>
    </ul>
  </div>
</template>

<script>
import Piano from "../piano/Piano.vue";
import Navbar from "../Navbar.vue";
import chromatic from "./music/chromatic.js";
import labels from "./data/labels.js";

export default {
  name: "Lesson1",
  components: {
    Piano,
    Navbar,
  },
  data: function () {
    return {
      chromatic: chromatic.data,
      labels: labels.whitekeys,
    };
  },
};
</script>

<style scoped>
.l1a-letters {
  display: flex;
  flex-direction: row;
  zoom: 0.7;
  -moz-transform: scale(0.7);
}
.l1a-letter-div {
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  font-size: 20px;
  text-align: center;
  padding: 15px;
}
</style>