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
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Victor+Mono:ital,wght@0,100..700;1,100..700&display=swap');
.main {
  font-family: "poppins", sans-serif;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>

