<template>
  <BlackLetters :octaves="octaves" />
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
  <WhiteLetters :octaves="octaves" />
</template>

<script>
import WhiteLetters from "./WhiteLetters.vue";
import BlackLetters from "./BlackLetters.vue";

export default {
  name: "Keys",
  components: { WhiteLetters, BlackLetters },
  props: { key_data: Array, octaves: Number },
  computed: {
    wkey_nums() {
      let nums = [];
      for (let i = 0; i < this.octaves; i++) {
        console.log(i);
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