<template>
  <div class="base-container">
    <Title />
    <change-view-button @click="changeView = !changeView" v-bind:class="{ show: changeView, hide: !changeView }"/>
    <base-form v-show="changeView"/>
    <usersList />
  </div>
</template>

<script>
import Title from "./Title.vue";
import UsersList from "./UsersList.vue";
import BaseForm from "./BaseForm.vue";
import ChangeViewButton from './ChangeViewButton.vue';
import { ref } from 'vue'

export default {
  components: { UsersList, Title, BaseForm, ChangeViewButton },
  setup() {
    const changeView = ref(true);

    return { changeView };
  },
};
</script>

<style scoped>
.base-container {
  @apply w-full min-h-screen my-10;
}
.show {
  @apply bg-green-700
}
.hide {
  @apply bg-red-700
}
</style>