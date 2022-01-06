<template>
  <div class="keysticker">
    <div class="sticker">
      <div>{{ sticker }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KeySticker",
  props: { sticker: String },
};
</script>

<style>
.keysticker {
  position: absolute;
  bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.sticker {
  box-sizing: border-box;
  height: 24px;
  width: 24px;
  border-radius: 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  background-color: white;
  border: 2px solid black;
}
</style>