<template>
  <div id="keys">
    <div id="white-keys">
      <div class="white-key" :class="{ pressed: key_data[0] }"></div>
      <div class="white-key" :class="{ pressed: key_data[2] }"></div>
      <div class="white-key" :class="{ pressed: key_data[4] }"></div>
      <div class="white-key" :class="{ pressed: key_data[5] }"></div>
      <div class="white-key" :class="{ pressed: key_data[7] }"></div>
      <div class="white-key" :class="{ pressed: key_data[9] }"></div>
      <div class="white-key" :class="{ pressed: key_data[11] }"></div>
      <div class="white-key" :class="{ pressed: key_data[12] }"></div>
      <div class="white-key" :class="{ pressed: key_data[14] }"></div>
      <div class="white-key" :class="{ pressed: key_data[16] }"></div>
      <div class="white-key" :class="{ pressed: key_data[17] }"></div>
      <div class="white-key" :class="{ pressed: key_data[19] }"></div>
      <div class="white-key" :class="{ pressed: key_data[21] }"></div>
      <div class="white-key" :class="{ pressed: key_data[23] }"></div>
      <div class="white-key" :class="{ pressed: key_data[24] }"></div>
    </div>
    <div id="black-keys">
      <div class="black-key" :class="{ pressed: key_data[1] }"></div>
      <div class="black-key" :class="{ pressed: key_data[3] }"></div>
      <div class="black-key invis"></div>
      <div class="black-key" :class="{ pressed: key_data[6] }"></div>
      <div class="black-key" :class="{ pressed: key_data[8] }"></div>
      <div class="black-key" :class="{ pressed: key_data[10] }"></div>
      <div class="black-key invis"></div>
      <div class="black-key" :class="{ pressed: key_data[13] }"></div>
      <div class="black-key" :class="{ pressed: key_data[15] }"></div>
      <div class="black-key invis"></div>
      <div class="black-key" :class="{ pressed: key_data[18] }"></div>
      <div class="black-key" :class="{ pressed: key_data[20] }"></div>
      <div class="black-key" :class="{ pressed: key_data[22] }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Keys",
  props: { key_data: Array },
};
</script>

<style scoped>
#white-keys {
  position: absolute;
  display: flex;
  flex-direction: row;
}
.white-key {
  box-sizing: border-box;
  width: 50px;
  height: 180px;
  border: 3px solid black;
}
#black-keys {
  position: absolute;
  left: 32px;
  display: flex;
  flex-direction: row;
}
.black-key {
  box-sizing: border-box;
  margin-left: 7px;
  margin-right: 7px;
  width: 36px;
  height: 100px;
  background-color: black;
  border: 3px solid black;
}
.invis {
  visibility: hidden;
}
.pressed {
  background-color: #77aa88 !important;
}
</style>