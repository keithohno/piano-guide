<template>
  <div id="black-letters">
    <div
      v-for="(note, i) in keynames"
      :key="i"
      :class="{ invis: note == 0 }"
      class="letter-div"
      @click="$emit('selectkey', note[1])"
    >
      {{ note[0] }}
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
        letters.push(["C#\nB♭", 1]);
        letters.push(["D#\nE♭", 3]);
        letters.push(0);
        letters.push(["F#\nG♭", 6]);
        letters.push(["G#\nA♭", 8]);
        letters.push(["A#\nB♭", 10]);
        letters.push(0);
      }
      letters.pop();
      return letters;
    },
  },
};
</script>

<style scoped>
#black-letters {
  margin-left: 16px;
  display: flex;
  flex-direction: row;
}
.letter-div {
  margin-left: 11px;
  margin-right: 10px;
  width: 36px;
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
  width: 12px;
  visibility: hidden;
}
</style>