<template>
  <p>Home Page</p>
  <div v-for="(link, i) in links" :key="i">
    <router-link :to="'/' + link">
      {{ names[i] }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: function () {
    return {
      links: [
        "notes",
        "practice_notes",
        "steps_sharps_flats",
        "scales",
        "keys",
      ],
      names: [
        "The Notes of the Piano",
        "Practice 1",
        "Steps, Sharps, and Flats",
        "Scales",
        "Keys",
      ],
    };
  },
};
</script>