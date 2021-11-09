<template>
  <div id="black-letters">
    <div
      v-for="(note, i) in keynames"
      :key="i"
      :class="{ invis: note == 0 }"
      class="letter-div"
      @click="$emit('selectkey', note[1])"
    >
      <span>
        {{ note[0] }}
      </span>
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
  position: absolute;
  margin-left: 18px;
  display: flex;
  flex-direction: row;
  z-index: 3;
}
.letter-div {
  box-sizing: border-box;
  margin-left: 10px;
  margin-right: 9px;
  width: 38px;
  height: 150px;
  display: flex;
}
.letter-div span {
  text-align: center;
  font-size: 20px;
  height: 50px;
  width: 100%;
}
.letter-div:hover span {
  background-color: #e0ffe0;
}
.letter-div:hover {
  background-color: #363;
  cursor: pointer;
}
.invis {
  width: 14px;
  visibility: hidden;
}
</style>