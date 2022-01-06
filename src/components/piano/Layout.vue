<template>
  <div
    class="layout"
    :class="{
      'layout-labeled-top': labeled_top,
      'layout-labeled-bot': labeled_bot,
    }"
  >
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
        v-if="pparams.interactive"
        :color="color === 'w' ? 'white' : 'black'"
        :disabled="
          pparams.interactive &&
          hovered &&
          (i > pparams.max_interactive || i < pparams.min_interactive)
        "
        :keynum="i"
        @selectkey="this.$emit('selectkey', $event)"
      />
      <KeyLabel
        v-if="labels && labels[i]"
        :label="labels[i]"
        :color="color === 'w' ? 'white' : 'black'"
      />
      <KeySticker v-if="stickers && stickers[i]" :sticker="stickers[i]" />
    </div>
  </div>
</template>

<script>
import KeyBackground from "./KeyBackground.vue";
import KeyClickable from "./KeyClickable.vue";
import KeyLabel from "./KeyLabel.vue";
import KeySticker from "./KeySticker.vue";

export default {
  name: "Keys",
  components: {
    KeyBackground,
    KeyClickable,
    KeyLabel,
    KeySticker,
  },
  props: {
    pparams: Object,
    key_data: Array,
    labels: Array,
    stickers: Array,
    hovered: Boolean,
  },
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
    labeled_top() {
      for (let i = 0; i < this.pparams.notes; i++) {
        if (this.labels && this.labels[i] && this.colors[i] == "b") {
          return true;
        }
      }
      return false;
    },
    labeled_bot() {
      for (let i = 0; i < this.pparams.notes; i++) {
        if (this.labels && this.labels[i] && this.colors[i] == "w") {
          return true;
        }
      }
      return false;
    },
  },
};
</script>

<style scoped>
.layout {
  position: relative;
  display: flex;
  flex-direction: row;
}
.layout-labeled-top {
  padding-top: 20px;
}
.layout-labeled-bot {
  padding-bottom: 20px;
}
.layout-white-key {
  position: relative;
  box-sizing: border-box;
  width: 40px;
  height: 140px;
  margin-right: -3px;
}
.layout-black-key {
  position: relative;
  box-sizing: border-box;
  margin-left: -12px;
  margin-right: -15px;
  width: 27px;
  height: 80px;
  z-index: 1;
}
</style>