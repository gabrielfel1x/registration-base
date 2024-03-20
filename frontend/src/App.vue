<template>
  <Main class="main" />
</template>

<script>
import Main from "./components/Main.vue";

export default {
  components: {
    Main,
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Recursive:wght@300..1000&display=swap');
.main {
  font-family: "recursive", sans-serif;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>

