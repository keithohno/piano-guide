<template>
  <div id="root"><router-view /></div>
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
#root > div {
  position: absolute;
  font-size: 24px;
  flex-direction: column;
  width: 60%;
  min-width: 800px;
}
</style>