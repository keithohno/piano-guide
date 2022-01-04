<template>
  <div
    class="keyshade-base"
    :class="{
      green: pressed,
      black: color == 'black',
      white: color == 'white',
    }"
  />
  <div
    v-if="!$store.state.playing"
    class="keyshade-interactive"
    :class="{
      'black-clickable': color == 'black' && !disabled,
      'white-clickable': color == 'white' && !disabled,
      'black-disabled': color == 'black' && disabled,
      'white-disabled': color == 'white' && disabled,
    }"
  />
</template>

<script>
export default {
  name: "KeyGraphic",
  props: {
    color: String,
    pressed: Boolean,
    disabled: Boolean,
  },
};
</script>

<style scoped>
.keyshade-base,
.keyshade-interactive {
  position: absolute;
  box-sizing: border-box;
  border: 3px solid black;
  width: 100%;
  height: 100%;
}
.keyshade-interactive {
  z-index: 1;
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
.black-clickable:hover {
  background-color: #413;
}
.white-clickable:hover {
  background-color: #fcd;
}
.black-disabled {
  background: repeating-linear-gradient(
    45deg,
    black,
    black 5px,
    #333 5px,
    #333 10px
  );
}
.white-disabled {
  background: repeating-linear-gradient(
    45deg,
    white,
    white 5px,
    #ccc 5px,
    #ccc 10px
  );
}
</style>