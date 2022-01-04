<template>
  <div
    class="keylabel"
    :class="{
      'keylabel-upper': color == 'black',
      'keylabel-lower': color == 'white',
    }"
  >
    <div>
      {{ label }}
    </div>
  </div>
</template>

<script>
export default {
  name: "KeyLabel",
  props: { label: String, color: String },
};
</script>

<style scoped>
.keylabel {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.keylabel-upper {
  top: -50px;
}
.keylabel-lower {
  top: 180px;
}
</style>
