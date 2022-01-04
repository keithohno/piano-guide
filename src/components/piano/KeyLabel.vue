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
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 20px;
}
.keylabel-upper {
  top: -40px;
}
.keylabel-lower {
  top: 140px;
}
</style>
