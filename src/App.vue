<template>
  <Piano
    :bpm="180"
    :key_const="14"
    :interactive="true"
    :music_data="music_data"
  />
</template>

<script>
import Piano from "./components/Piano.vue";

export default {
  name: "App",
  components: {
    Piano,
  },
  data: function () {
    return {
      music_data: [
        { time: "0:0", chord: 3, duration: 1 },
        { time: "0:1", chord: 2, duration: 1 },
        { time: "0:2", chord: 1, duration: 1 },
        { time: "0:3", chord: 2, duration: 1 },
        { time: "1:0", chord: 3, duration: 1 },
        { time: "1:1", chord: 3, duration: 1 },
        { time: "1:2", chord: 3, duration: 2 },
        { time: "2:0", chord: 2, duration: 1 },
        { time: "2:1", chord: 2, duration: 1 },
        { time: "2:2", chord: 2, duration: 2 },
        { time: "3:0", chord: 3, duration: 1 },
        { time: "3:1", chord: 5, duration: 1 },
        { time: "3:2", chord: 5, duration: 2 },
        { time: "4:0", chord: 3, duration: 1 },
        { time: "4:1", chord: 2, duration: 1 },
        { time: "4:2", chord: 1, duration: 1 },
        { time: "4:3", chord: 2, duration: 1 },
        { time: "5:0", chord: 3, duration: 1 },
        { time: "5:1", chord: 3, duration: 1 },
        { time: "5:2", chord: 3, duration: 1 },
        { time: "5:3", chord: 1, duration: 1 },
        { time: "6:0", chord: 2, duration: 1 },
        { time: "6:1", chord: 2, duration: 1 },
        { time: "6:2", chord: 3, duration: 1 },
        { time: "6:3", chord: 2, duration: 1 },
        { time: "7:0", chord: 1, duration: 4 },
      ],
    };
  },
};
</script>