<template>
  <div id="white-letters">
    <div v-for="(letter, i) in keynames" :key="i" class="letter-div">
      {{ letter }}
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
        letters.push("C");
        letters.push("D");
        letters.push("E");
        letters.push("F");
        letters.push("G");
        letters.push("A");
        letters.push("B");
      }
      letters.push("C");
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