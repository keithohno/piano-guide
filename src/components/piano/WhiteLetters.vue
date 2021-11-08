<template>
  <div id="white-letters">
    <div
      v-for="(note, i) in keynames"
      :key="i"
      class="letter-div"
      @click="$emit('selectkey', note[1])"
    >
      {{ note[0] }}
    </div>
  </div>
</template>

<script>
export default {
  name: "WhiteLetters",
  props: {
    octaves: Number,
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
};
</script>

<style scoped>
#white-letters {
  display: flex;
  flex-direction: row;
}
.letter-div {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  text-align: center;
  font-size: 20px;
}
.letter-div:hover {
  background-color: #bfb;
  cursor: pointer;
}
</style>