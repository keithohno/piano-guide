<template>
  <div
    class="white-letters"
    :class="{ 'wk-labeled': pparams.labeled, 'wk-unlabeled': !pparams.labeled }"
  >
    <div
      v-for="(note, i) in keynames"
      :key="i"
      class="letter-div"
      :class="{
        invis: note == 0,
        'clickable-active':
          pparams.interactive &&
          note[1] <= pparams.max_interactive &&
          note[1] >= pparams.min_interactive &&
          !$store.state.playing,
        clickable:
          pparams.interactive &&
          note[1] <= pparams.max_interactive &&
          note[1] >= pparams.min_interactive,
        'unclickable-active':
          hovered &&
          !$store.state.playing &&
          pparams.interactive &&
          (note[1] > pparams.max_interactive ||
            note[1] < pparams.min_interactive),
      }"
      @click="handle_click(note[1])"
    >
      <div></div>
      <span v-if="pparams.labeled">
        {{ note[0] }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhiteLetters",
  props: {
    pparams: Object,
    hovered: Boolean,
  },
  computed: {
    keynames() {
      let letters = [];
      for (let i = 0; i < this.pparams.notes / 12; i++) {
        letters.push(["C", 12 * i]);
        letters.push(["D", 2 + 12 * i]);
        letters.push(["E", 4 + 12 * i]);
        letters.push(["F", 5 + 12 * i]);
        letters.push(["G", 7 + 12 * i]);
        letters.push(["A", 9 + 12 * i]);
        letters.push(["B", 11 + 12 * i]);
      }
      return letters.filter(
        (letter) => !letter || letter[1] < this.pparams.notes
      );
    },
  },
  methods: {
    handle_click(note) {
      if (
        this.pparams.interactive &&
        note <= this.pparams.max_interactive &&
        note >= this.pparams.min_interactive
      ) {
        this.$emit("selectkey", note);
      }
    },
  },
};
</script>

<style scoped>
.white-letters {
  position: absolute;
  display: flex;
  flex-direction: row;
}
.wk-labeled {
  margin-top: 54px;
  height: 230px;
}
.wk-unlabeled {
  height: 180px;
}
.letter-div {
  width: 52px;
  margin-right: -2px;
  display: flex;
  flex-direction: column;
  z-index: 1;
}
.letter-div span {
  box-sizing: border-box;
  text-align: center;
  font-size: 20px;
  padding-top: 10px;
  width: 100%;
}
.letter-div div {
  height: 180px;
}
.clickable-active:hover {
  background-color: #ada;
  cursor: pointer;
}
.clickable-active:hover span {
  background-color: #e0ffe0;
}
.unclickable-active div {
  background: repeating-linear-gradient(
    45deg,
    black,
    black 5px,
    white 5px,
    white 10px
  );
  opacity: 0.2;
}
</style>