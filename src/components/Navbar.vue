<template>
  <nav id="navbar">
    <router-link class="nav-link" :to="prev">&#8592; PREVIOUS</router-link>
    <router-link class="nav-link" to="/">HOME</router-link>
    <div class="nav-link">MENU</div>
    <router-link class="nav-link" :to="next">NEXT &#8592;</router-link>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    page: String,
  },
  computed: {
    prev() {
      switch (this.page) {
        case "notes":
          return "/";
        case "practice_notes":
          return "notes";
        case "steps_sharps_flats":
          return "practice_notes";
        case "scales":
          return "steps_sharps_flats";
        case "keys":
          return "scales";
        default:
          return null;
      }
    },
    next() {
      switch (this.page) {
        case "notes":
          return "practice_notes";
        case "practice_notes":
          return "steps_sharps_flats";
        case "steps_sharps_flats":
          return "scales";
        case "scales":
          return "keys";
        case "keys":
          return "/";
        default:
          return null;
      }
    },
  },
};
</script>

<style scoped>
#navbar {
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #cfc;
}
.nav-link {
  flex-grow: 1;
}
</style>