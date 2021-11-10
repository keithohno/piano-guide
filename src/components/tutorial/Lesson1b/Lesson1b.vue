<template>
  <div class="lesson-container">
    <p>
      Now that you know the notes used to form scales, you can begin to
      construct and learn simple melodies! Here are a few songs that you can
      play: !note! everything in this section has been adjusted to use only the
      white keys of the piano. This is due to something called the 'key' of a
      piece, which you will learn about in level 2!
    </p>
    <Piano :octaves="1" :scale_locked="true" :music_data="mary_data" />
    <Piano :octaves="1" :scale_locked="true" :music_data="twinkle_data" />
    <Piano
      :octaves="2"
      :scale_locked="true"
      :music_data="itsy_data"
      :bpm="180"
    />
    <p>
      At this stage, the most important thing is to practice, practice,
      practice. As you learn to associate melodies with notes on the piano, your
      brain will gradually build connections that help develop your sense of
      'relative pitch.' This may take months or years to master, but the more
      you practice, the easier it will be to pick up new songs.
    </p>
  </div>
</template>

<script>
import Piano from "../../piano/Piano.vue";
import mary from "./mary_data.js";
import twinkle from "./twinkle_data.js";
import itsy from "./itsy_data.js";

export default {
  name: "Lesson1b",
  components: {
    Piano,
  },
  data: function () {
    return {
      mary_data: mary.data,
      twinkle_data: twinkle.data,
      itsy_data: itsy.data,
    };
  },
};
</script>

<style scoped>
.lesson-container {
  position: absolute;
  font-size: 24px;
  flex-direction: column;
  width: 80%;
  left: 10%;
}
</style>