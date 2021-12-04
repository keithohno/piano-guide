<template>
  <div
    class="keys"
    :class="{ labeled: pparams.labeled, unlabeled: !pparams.labeled }"
  >
    <div class="white-keys">
      <div
        v-for="(keynum, i) in wkey_num_labels"
        :key="i"
        class="white-key"
        :class="{ pressed: key_data[keynum] }"
      >
        <div v-if="keynum > 0" class="white-key-label">
          {{ keynum }}
        </div>
      </div>
    </div>
    <div class="black-keys">
      <div
        v-for="(keynum, i) in bkey_num_labels"
        :key="i"
        class="black-key"
        :class="{ pressed: key_data[keynum], invis: keynum == -1 }"
      >
        <div v-if="keynum > 0" class="black-key-label">
          {{ keynum }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let scale_steps = [0, 2, 4, 5, 7, 9, 11];

export default {
  name: "KeyLabelsNum",
  props: { pparams: Object, key_data: Object, keynum: Number },
  computed: {
    num_labels() {
      let nums = Array(this.pparams.notes).fill(0);
      nums[this.keynum] = 1;

      // sets step_abs and step_rel to their lowest valid positions
      let step_abs = this.keynum == 0 ? 0 : this.keynum - 12;
      let step_rel = 0;
      while (step_abs + scale_steps[step_rel] < 0) {
        step_rel += 1;
      }

      // step_abs
      while (step_abs + scale_steps[step_rel] < this.pparams.notes) {
        nums[step_abs + scale_steps[step_rel]] = step_rel + 1;
        step_rel += 1;
        if (step_rel == 7) {
          step_rel = 0;
          step_abs += 12;
        }
      }
      return nums;
    },
    wkey_num_labels() {
      return this.num_labels.filter((num, index) =>
        scale_steps.includes(index % 12)
      );
    },
    bkey_num_labels() {
      let nums = this.num_labels.filter(
        (num, index) => !scale_steps.includes(index % 12)
      );
      for (let i = 0, twostep = true; i < nums.length; ) {
        i += twostep ? 2 : 3;
        twostep = !twostep;
        nums.splice(i, 0, -1);
        i += 1;
      }
      return nums;
    },
  },
};
</script>

<style scoped>
.white-key-label,
.black-key-label {
  align-self: flex-end;
  text-align: center;
  border-radius: 9px;
  height: 20px;
  width: 20px;
  z-index: 5;
  font-size: 20px;
}
.white-key-label {
  background-color: white;
  color: black;
  margin-bottom: 10px;
}
.black-key-label {
  background-color: white;
  margin-bottom: 6px;
}
.keys {
  position: absolute;
  height: 180px;
}
.labeled {
  margin-top: 54px;
}
.white-keys,
.black-keys {
  position: absolute;
  display: flex;
  flex-direction: row;
}
.black-keys {
  margin-left: 18px;
}
.white-key,
.black-key {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}
.white-key {
  width: 52px;
  height: 180px;
  margin-right: -2px;
}
.black-key {
  margin-left: 11px;
  margin-right: 10px;
  width: 36px;
  height: 100px;
  z-index: 2;
}
.invis {
  width: 11.7px;
  visibility: hidden;
  z-index: 0 !important;
}
</style>