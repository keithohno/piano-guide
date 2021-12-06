<template>
  <div class="lesson-container">
    <p>
      You now have a basic knowledge of how musical sounds are 'organized' onto
      the keys of a piano. Try playing a few of the simple melodies below — they
      have been adapted to only use the white keys of the piano.
    </p>
    <Piano
      title="Mary had a Little Lamb"
      :key_preset="0"
      :scale_locked="true"
      :music_data="mary"
    />
    <Piano
      title="Twinkle Twinkle Little Star"
      :key_preset="0"
      :scale_locked="true"
      :music_data="twinkle"
    />
    <Piano
      title="The Itsy Bitsy Spider"
      :bpm="220"
      :notes="24"
      :key_preset="0"
      :base_octave="-1"
      :scale_locked="true"
      :music_data="itsy"
    />
    <p>
      Here are a few more melody fragments, see if you can complete the song!
    </p>
    <Piano
      title="Jingle Bells"
      :bpm="180"
      :key_preset="0"
      :scale_locked="true"
      :music_data="jingle"
    />
    <Piano
      title="Do You Wanna Build a Snowman"
      :notes="24"
      :key_preset="0"
      :base_octave="-1"
      :scale_locked="true"
      :music_data="snowman"
    />
    <p>
      Repeated practice is the most important factor in developing a better
      sense of pitch, which will improve your ability to associate sounds and
      melodies with the physical keys of a piano.
    </p>
  </div>
</template>

<script>
import Piano from "../piano/Piano.vue";
import mary from "./music/mary_had_a_little_lamb.js";
import itsy from "./music/itsy_bitsy_spider.js";
import twinkle from "./music/twinkle_twinkle_little_star.js";
import jingle from "./music/jingle_bells.js";
import snowman from "./music/do_you_wanna_build_a_snowman.js";

export default {
  name: "Lesson2",
  components: {
    Piano,
  },
  data: function () {
    return {
      mary: mary.data,
      itsy: itsy.data,
      twinkle: twinkle.data,
      jingle: jingle.data,
      snowman: snowman.data,
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