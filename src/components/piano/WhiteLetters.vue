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
          !pstate.play_state,
        clickable:
          pparams.interactive &&
          note[1] <= pparams.max_interactive &&
          note[1] >= pparams.min_interactive,
      }"
      @click="handle_click(note[1])"
    >
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
    pstate: Object,
  },
  computed: {
    keynames() {
      let letters = [];
      for (let i = 0; i < this.pparams.octaves; i++) {
        letters.push(["C", 12 * i]);
        letters.push(["D", 2 + 12 * i]);
        letters.push(["E", 4 + 12 * i]);
        letters.push(["F", 5 + 12 * i]);
        letters.push(["G", 7 + 12 * i]);
        letters.push(["A", 9 + 12 * i]);
        letters.push(["B", 11 + 12 * i]);
      }
      letters.push(["C", 12 * this.pparams.octaves]);
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
.white-letters {
  position: absolute;
  display: flex;
  flex-direction: row;
}
.wk-labeled {
  margin-top: 50px;
  height: 234px;
}
.wk-unlabeled {
  height: 184px;
}
.letter-div {
  width: 50px;
  display: flex;
  z-index: 1;
}
.letter-div span {
  box-sizing: border-box;
  text-align: center;
  font-size: 20px;
  align-self: flex-end;
  height: 50px;
  width: 100%;
  padding: 20%;
}
.clickable span {
  border-bottom: 2px solid #585;
  background-color: #eee;
  border-left: 2px solid white;
  border-right: 2px solid white;
}
.clickable-active:hover {
  background-color: #ada;
  cursor: pointer;
}
.clickable-active:hover span {
  background-color: #e0ffe0;
}
</style>