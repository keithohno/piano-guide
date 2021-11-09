<template>
  <div id="keys">
    <div id="white-keys">
      <div
        v-for="keynum in wkey_nums"
        :key="keynum"
        class="white-key"
        :class="{ pressed: key_data[keynum] }"
      ></div>
    </div>
    <div id="black-keys">
      <div
        v-for="keynum in bkey_nums"
        :key="keynum"
        class="black-key"
        :class="{ pressed: key_data[keynum], invis: keynum == -1 }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Keys",
  props: { key_data: Array, octaves: Number },
  computed: {
    wkey_nums() {
      let nums = [];
      for (let i = 0; i < this.octaves; i++) {
        nums.push(12 * i);
        nums.push(12 * i + 2);
        nums.push(12 * i + 4);
        nums.push(12 * i + 5);
        nums.push(12 * i + 7);
        nums.push(12 * i + 9);
        nums.push(12 * i + 11);
      }
      nums.push(this.octaves * 12);
      return nums;
    },
    bkey_nums() {
      let nums = [];
      for (let i = 0; i < this.octaves; i++) {
        nums.push(12 * i + 1);
        nums.push(12 * i + 3);
        nums.push(-1);
        nums.push(12 * i + 6);
        nums.push(12 * i + 8);
        nums.push(12 * i + 10);
        nums.push(-1);
      }
      nums.pop();
      return nums;
    },
  },
};
</script>

<style scoped>
#keys {
  height: 180px;
}
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
  left: 25px;
  display: flex;
  flex-direction: row;
}
.black-key {
  box-sizing: border-box;
  margin-left: 11px;
  margin-right: 10px;
  width: 36px;
  height: 100px;
  background-color: black;
  border: 3px solid black;
}
.invis {
  width: 11.7px;
  visibility: hidden;
}
.pressed {
  background-color: #77aa88 !important;
}
</style>