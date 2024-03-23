<template>
  <ListSection>
    <DefaultBox
      v-for="user in responseData"
      :key="user.id"
      class="flex items-center justify-center"
    >
      <div class="flex flex-col items-start justify-center ml-8">
        <p class="user">
          {{ `${user.name}` }}
        </p>
        <p class="user">
          {{ `${user.email}` }}
        </p>
      </div>

      <button
        class="ml-auto mr-10 hover:transform hover:scale-105 hover:opacity-80"
        @click="deleteUser(user.id)"
      >
        <i class="fa-solid fa-trash"></i>
      </button>
    </DefaultBox>
  </ListSection>
</template>

<script>
import DefaultBox from "./DefaultBox.vue";
import ListSection from "./ListSection.vue";
import { api } from "../plugins/api";
import { ref, watch } from "vue";

export default {
  components: { ListSection, DefaultBox },
  setup() {
    const responseData = ref([]);

    const collectData = async () => {
      try {
        const response = await api.get("/customers");
        responseData.value = response.data;
      } catch (error) {
        console.log(error);
      }
    };

    const deleteUser = async (id) => {
      try {
        await api.delete("/customer?id=" + id);
        collectData();
        console.log(id);
      } catch (error) {
        console.log(error);
      }
    };

    watch(responseData, () => {
      collectData();
    });
    return { responseData, collectData, deleteUser };
  },
  mounted() {
    this.collectData();
  },
};
</script>

<style>
button {
  transition: transform 0.3s ease-in-out;
}
.user {
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>