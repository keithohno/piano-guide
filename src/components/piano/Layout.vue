<template>
  <div class="layout">
    <div
      v-for="(color, i) in colors"
      :key="i"
      :class="{
        'layout-white-key': color == 'w',
        'layout-black-key': color == 'b',
      }"
    >
      <KeyBackground
        :pressed="key_data[i]"
        :color="color === 'w' ? 'white' : 'black'"
      />
      <KeyClickable
        :color="color === 'w' ? 'white' : 'black'"
        :disabled="
          pparams.interactive &&
          hovered &&
          (i > pparams.max_interactive || i < pparams.min_interactive)
        "
        :keynum="i"
        @selectkey="this.$emit('selectkey', $event)"
      />
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
    colors() {
      let colors = [];
      for (let i = 0; i < this.pparams.notes / 12; i++) {
        colors.push("w");
        colors.push("b");
        colors.push("w");
        colors.push("b");
        colors.push("w");
        colors.push("w");
        colors.push("b");
        colors.push("w");
        colors.push("b");
        colors.push("w");
        colors.push("b");
        colors.push("w");
      }
      return colors.slice(0, this.pparams.notes);
    },
  },
};
</script>

<style scoped>
.layout {
  position: relative;
  display: flex;
  flex-direction: row;
  height: 180px;
}
.layout-white-key {
  position: relative;
  box-sizing: border-box;
  width: 52px;
  height: 180px;
  margin-right: -3px;
}
.layout-black-key {
  position: relative;
  box-sizing: border-box;
  margin-left: -18px;
  margin-right: -18px;
  width: 36px;
  height: 100px;
  z-index: 1;
}
</style>