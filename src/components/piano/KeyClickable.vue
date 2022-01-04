<template>
  <div
    v-if="!$store.state.playing"
    class="keyclickable"
    :class="{
      'black-clickable': color == 'black' && !disabled,
      'white-clickable': color == 'white' && !disabled,
      'black-disabled': color == 'black' && disabled,
      'white-disabled': color == 'white' && disabled,
    }"
    @click="this.$emit('selectkey', keynum)"
  />
</template>

<script>
export default {
  names: "KeyClickable",
  props: {
    color: String,
    disabled: Boolean,
    keynum: Number,
  },
};
</script>

<style scoped>
.keyclickable {
  position: absolute;
  box-sizing: border-box;
  border: 3px solid black;
  width: 100%;
  height: 100%;
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