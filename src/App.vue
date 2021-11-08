<template>
  <Piano :bpm="180" :key_const="14" :interactive="true" />
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