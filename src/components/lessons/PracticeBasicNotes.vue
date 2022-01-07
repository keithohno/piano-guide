<template>
  <Navbar page="practice_notes" />
  <div class="lesson-container">
    <p>
      After completing the first lesson, you should have a rudimentary
      understanding of how musical sounds are represented in the keys of a
      piano. Now, you can begin to practice simple melodies. At early stages of
      piano learning, it is important to develop good technique -- the muscle
      memory you develop now will be difficult to change later!
    </p>
    <p>
      Technique 1: Play only with the tips of your fingers, and arch your hand
      over the keys! You should be able to fit a small lime in between your palm
      and the keyboard. For this reason, it is also important to trim your nails
      before playing.
    </p>
    <p>
      Technique 2: Use proper fingering -- use the right fingers to play the
      right keys. This will be covered in more detail in future lessons, but for
      now, follow along with the numeric labels in the demos below. 1 is thumb,
      2 is pointer finger, 3 is middle finger, and so on.
    </p>
    <p>
      Proper hand and finger position will be vital as you start to develop
      precision and speed. Start by playing along to the demos below:
    </p>
    <Piano
      title="Mary had a Little Lamb"
      :key_preset="0"
      :scale_locked="true"
      :music_data="mary"
    />
    <Piano
      title="Jingle Bells"
      :key_preset="0"
      :scale_locked="true"
      :music_data="jingle"
    />
  </div>
</template>

<script>
import Piano from "../piano/Piano.vue";
import Navbar from "../Navbar.vue";
import mary from "./music/mary_had_a_little_lamb.js";
import itsy from "./music/itsy_bitsy_spider.js";
import twinkle from "./music/twinkle_twinkle_little_star.js";
import jingle from "./music/jingle_bells.js";
import snowman from "./music/do_you_wanna_build_a_snowman.js";

export default {
  name: "Lesson2",
  components: {
    Piano,
    Navbar,
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