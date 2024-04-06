<template>
  <div class="base-container">
    <modal v-show="modalVisible" :closeModal="openUsers" />
    <Title />
    <change-view-button @click="toggleViewForm" />
    <base-form v-show="viewVisible" :openUsers="openUsers" />
    <usersList />
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import Title from "./Title.vue";
import UsersList from "./UsersList.vue";
import BaseForm from "./BaseForm.vue";
import ChangeViewButton from "./ChangeViewButton.vue";
import Modal from "./Modal.vue";

export default {
  components: { UsersList, Title, BaseForm, ChangeViewButton, Modal },
  setup() {
    const viewVisible: Ref<Boolean> = ref(true);
    const modalVisible: Ref<Boolean> = ref(false);

    function toggleViewForm(): void {
      viewVisible.value = !viewVisible.value;
    }

    function openUsers(): void {
      modalVisible.value = !modalVisible.value;
    }

    return {
      viewVisible,
      toggleViewForm,
      modalVisible,
      openUsers,
    };
  },
};
</script>

<style scoped>
.base-container {
  @apply w-full min-h-screen my-10 flex items-center justify-center;
}
</style>
