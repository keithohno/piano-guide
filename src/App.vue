<template>
  <Piano :bpm="180" :key_="'D'" />
</template>

<script>
import Piano from "./components/Piano.vue";

export default {
  name: "App",
  components: {
    Piano,
  },
};
</script>