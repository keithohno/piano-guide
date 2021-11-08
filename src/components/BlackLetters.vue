<template>
  <div id="black-letters">
    <div
      v-for="(letter, i) in keynames"
      :key="i"
      :class="{ invis: letter == '0' }"
      class="letter-div"
    >
      {{ letter }}
    </div>
  </div>
</template>

<script>
export default {
  name: "BlackLetters",
  props: {
    octaves: Number,
  },
  computed: {
    keynames() {
      let letters = [];
      for (let i = 0; i < this.octaves; i++) {
        letters.push("C#\nB♭");
        letters.push("D#\nE♭");
        letters.push("0");
        letters.push("F#\nG♭");
        letters.push("G#\nA♭");
        letters.push("A#\nB♭");
        letters.push("0");
      }
      letters.pop();
      return letters;
    },
  },
};
</script>

<style scoped>
#black-letters {
  margin-left: 24px;
  display: flex;
  flex-direction: row;
}
.letter-div {
  margin-left: 6px;
  margin-right: 6px;
  width: 38px;
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
.invis {
  visibility: hidden;
}
</style>