<template>
  <div class="base-container">
    <Title />
    <UsersList />
  </div>
</template>

<script>
import Title from "./Title.vue";
import UsersList from "./UsersList.vue";

export default {
  components: { UsersList, Title },
};
</script>

<style scoped>
.base-container {
  @apply w-full min-h-screen bg-gray-100;
}
</style>