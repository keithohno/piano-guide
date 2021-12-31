<template>
  <div id="root">
    <div id="contents"><router-view /></div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
#root {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#contents {
  font-size: 24px;
  width: 60%;
  min-width: 800px;
}
</style>