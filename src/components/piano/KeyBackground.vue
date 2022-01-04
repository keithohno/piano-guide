<template>
  <div
    class="keybackground"
    :class="{
      green: pressed,
      black: color == 'black' && !pressed,
      white: color == 'white' && !pressed,
    }"
  />
</template>

<script>
export default {
  name: "KeyBackground",
  props: {
    color: String,
    pressed: Number,
  },
};
</script>

<style scoped>
.keybackground {
  position: absolute;
  box-sizing: border-box;
  border: 3px solid black;
  width: 100%;
  height: 100%;
}
.green {
  background-color: #99ccaa;
}
.black {
  background-color: black;
}
.white {
  background-color: white;
}
</style>