<template>
  <div class="base-container">
    <Title />
    <BaseForm />
    <usersList />
  </div>
</template>

<script>
import Title from "./Title.vue";
import UsersList from "./UsersList.vue";
import BaseForm from "./BaseForm.vue";

export default {
  components: { UsersList, Title, BaseForm },
};
</script>

<style scoped>
.base-container {
  @apply w-full min-h-screen my-10;
}
</style>