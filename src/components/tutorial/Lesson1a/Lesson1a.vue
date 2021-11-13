<template>
  <div class="lesson-container">
    <p>
      In western music, notes are divided into a twelve part interval of notes,
      each of which correspond to the black and white keys of the piano. You'll
      notice that the same pattern of twelve keys repeats multiple times on a
      piano, from deep and low to high ringing notes.
    </p>
    <Piano
      title="12 Part Interval of Notes"
      :octaves="3"
      :music_data="this.chromatic_data"
    />
    <p>
      The space between any two consecutive notes is called a half-step.
      Combining two half-steps (skipping the note between) produces a
      whole-step.
    </p>
    <p>Half steps:</p>
    <Piano
      title="Half Step Demo"
      :octaves="1"
      :interactive="true"
      :music_data="[
        { time: '0:1', chord: 0, duration: 1 },
        { time: '0:2', chord: 1, duration: 1 },
      ]"
    />
    <p>Whole steps:</p>
    <Piano
      title="Whole Step Demo"
      :octaves="1"
      :interactive="true"
      :music_data="[
        { time: '0:1', chord: 0, duration: 1 },
        { time: '0:2', chord: 2, duration: 1 },
      ]"
    />
    <p>
      Putting twelve spaces together gives us an octave. Notice how the two
      notes that form an octave sound similar:
    </p>
    <Piano
      title="Octave Demo"
      :octaves="2"
      :interactive="true"
      :music_data="[
        { time: '0:1', chord: 0, duration: 1 },
        { time: '0:2', chord: 12, duration: 1 },
        { time: '1:0', chord: [0, 12], duration: 2 },
      ]"
    />
    <p>
      A scale is a collection of eight 'increasing' notes, whose start and end
      form an octave. They follow a 'whole whole half whole whole whole half'
      pattern of steps.
    </p>
    <Piano
      title="Scale Demo"
      :octaves="2"
      :interactive="true"
      :scale_locked="true"
      :music_data="scale_data"
    />
    <p>
      Note: this is a major scale, which is the most important scale to know
      right now. There are quite a few other 'scales' that cover different
      notes, and some of them don't even have eight notes! One such scale has
      been shown below. Notice that all the white keys have been given letters
      from A to G. We use these letters to describe the notes they represent.
    </p>
    <Piano
      title="C Major Scale"
      :octaves="1"
      :scale_locked="true"
      :music_data="scale_data"
    />
    <div class="l1a-letters">
      <div class="l1a-letter-div">C</div>
      <div class="l1a-letter-div">D</div>
      <div class="l1a-letter-div">E</div>
      <div class="l1a-letter-div">F</div>
      <div class="l1a-letter-div">G</div>
      <div class="l1a-letter-div">A</div>
      <div class="l1a-letter-div">B</div>
      <div class="l1a-letter-div">C</div>
    </div>
  </div>
</template>

<script>
import Piano from "../../piano/Piano.vue";
import chromatic from "./chromatic_data.js";
import scale from "./scale_data.js";

export default {
  name: "Lesson1a",
  components: {
    Piano,
  },
  data: function () {
    return { chromatic_data: chromatic.data, scale_data: scale.data };
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