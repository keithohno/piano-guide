<template>
  <div
    class="black-letters"
    :class="{ 'bk-labeled': pparams.labeled, 'bk-unlabeled': !pparams.labeled }"
  >
    <div
      v-for="(note, i) in keynames"
      :key="i"
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
      class="letter-div"
      @click="handle_click(note[1])"
    >
      <span v-if="pparams.labeled">
        {{ note[0] }}
      </span>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlackLetters",
  props: {
    pparams: Object,
    hovered: Boolean,
  },
  computed: {
    keynames() {
      let letters = [];
      for (let i = 0; i < this.pparams.octaves; i++) {
        letters.push(["C#\nB♭", 1 + i * 12]);
        letters.push(["D#\nE♭", 3 + i * 12]);
        letters.push(0);
        letters.push(["F#\nG♭", 6 + i * 12]);
        letters.push(["G#\nA♭", 8 + i * 12]);
        letters.push(["A#\nB♭", 10 + i * 12]);
        letters.push(0);
      }
      letters.pop();
      return letters;
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
.black-letters {
  position: absolute;
  margin-left: 18px;
  display: flex;
  flex-direction: row;
}
.bk-labeled {
  height: 154px;
}
.bk-unlabeled {
  height: 100px;
}
.letter-div {
  box-sizing: border-box;
  margin-left: 10px;
  margin-right: 9px;
  width: 38px;
  display: flex;
  flex-direction: column;
  z-index: 3;
}
.letter-div span {
  box-sizing: border-box;
  text-align: center;
  font-size: 20px;
  height: 54px;
}
.letter-div div {
  height: 100px;
}
.clickable-active:hover span {
  background-color: #e0ffe0;
}
.clickable-active:hover {
  background-color: #363;
  cursor: pointer;
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
.invis {
  width: 14px;
  visibility: hidden;
  z-index: 0 !important;
}
</style>