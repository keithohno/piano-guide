<template>
  <div class="layout">
    <div class="layout-whites">
      <div v-for="keynum in wkey_nums" :key="keynum" class="layout-white-key">
        <KeyBackground :pressed="key_data[keynum]" :color="'white'" />
        <KeyClickable
          :color="'white'"
          :disabled="
            pparams.interactive &&
            hovered &&
            (keynum > pparams.max_interactive ||
              keynum < pparams.min_interactive)
          "
          :keynum="keynum"
          @selectkey="this.$emit('selectkey', $event)"
        />
      </div>
    </div>
    <div class="layout-blacks">
      <div
        v-for="keynum in bkey_nums"
        :key="keynum"
        class="layout-black-key"
        :class="{ invis: keynum == -1 }"
      >
        <KeyBackground :pressed="key_data[keynum]" :color="'black'" />
        <KeyClickable
          :color="'black'"
          :disabled="
            pparams.interactive &&
            hovered &&
            (keynum > pparams.max_interactive ||
              keynum < pparams.min_interactive)
          "
          @selectkey="this.$emit('selectkey', $event)"
          :keynum="keynum"
        />
      </div>
    </div>
  </div>
</template>

<script>
import KeyBackground from "./KeyBackground.vue";
import KeyClickable from "./KeyClickable.vue";

export default {
  name: "Keys",
  components: { KeyBackground, KeyClickable },
  props: { pparams: Object, key_data: Array, hovered: Boolean },
  computed: {
    wkey_nums() {
      let nums = [];
      for (let i = 0; i < this.pparams.notes / 12; i++) {
        nums.push(12 * i);
        nums.push(12 * i + 2);
        nums.push(12 * i + 4);
        nums.push(12 * i + 5);
        nums.push(12 * i + 7);
        nums.push(12 * i + 9);
        nums.push(12 * i + 11);
      }
      return nums.filter((num) => num < this.pparams.notes);
    },
    bkey_nums() {
      let nums = [];
      for (let i = 0; i < this.pparams.notes / 12; i++) {
        nums.push(12 * i + 1);
        nums.push(12 * i + 3);
        nums.push(-1);
        nums.push(12 * i + 6);
        nums.push(12 * i + 8);
        nums.push(12 * i + 10);
        nums.push(-1);
      }
      return nums.filter((num) => num < this.pparams.notes);
    },
  },
};
</script>

<style scoped>
.layout {
  height: 180px;
}
.layout-whites,
.layout-blacks {
  position: absolute;
  display: flex;
  flex-direction: row;
}
.layout-blacks {
  margin-left: 18px;
}
.layout-white-key {
  position: relative;
  box-sizing: border-box;
  width: 52px;
  height: 180px;
  margin-right: -2px;
}
.layout-black-key {
  position: relative;
  box-sizing: border-box;
  margin-left: 11px;
  margin-right: 10px;
  width: 36px;
  height: 100px;
  z-index: 1;
}
.invis {
  width: 11.7px;
  visibility: hidden;
  z-index: 0 !important;
}
</style>