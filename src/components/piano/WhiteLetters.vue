<template>
  <div
    class="white-letters"
    :class="{ 'wk-labeled': labels, 'wk-unlabeled': !labels }"
  >
    <div
      v-for="(note, i) in keynames"
      :key="i"
      class="letter-div"
      :class="{ clickable: !play_state && interactive }"
      @click="handle_click(note[1])"
    >
      <span v-if="labels">
        {{ note[0] }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhiteLetters",
  props: {
    octaves: Number,
    labels: Boolean,
    interactive: Boolean,
    play_state: Boolean,
  },
  computed: {
    keynames() {
      let letters = [];
      for (let i = 0; i < this.octaves; i++) {
        letters.push(["C", 0]);
        letters.push(["D", 2]);
        letters.push(["E", 4]);
        letters.push(["F", 5]);
        letters.push(["G", 7]);
        letters.push(["A", 9]);
        letters.push(["B", 11]);
      }
      letters.push(["C", 0]);
      return letters;
    },
  },
  methods: {
    handle_click(note) {
      if (this.interactive) {
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
  height: 230px;
}
.wk-unlabeled {
  height: 180px;
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
.clickable:hover {
  background-color: #ada;
  cursor: pointer;
}
.clickable:hover span {
  background-color: #e0ffe0;
}
</style>