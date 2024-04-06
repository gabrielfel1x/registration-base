<template>
  <ListSection v-if="filteredUsers.length > 0">
    <DefaultBox
      v-for="user in filteredUsers"
      :key="user.id"
      class="flex items-center justify-center"
    >
      <div class="flex flex-col items-start justify-center ml-8">
        <p class="user">
          {{ user.name }}
        </p>
        <p class="user">
          {{ user.email }}
        </p>
      </div>

      <div
        class="ml-auto mr-10 hover:transform hover:scale-105 hover:opacity-80"
      >
        <button @click="deleteUser(user.id)">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </DefaultBox>
  </ListSection>
  <p v-else class="w-full text-red-900">dont exist!</p>
</template>

<script lang="ts">
import ListSection from "./ListSection.vue";
import DefaultBox from "./DefaultBox.vue";
import { api } from "../plugins/api";
import { ref, watch, Ref } from "vue";

interface User {
  id: number;
  name: string;
  email: string;
}

export default {
  components: { ListSection, DefaultBox },
  props: {
    filterText: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const responseData: Ref<User[]> = ref([]);

    const collectData = async () => {
      try {
        const response = await api.get("/customers");
        responseData.value = response.data;
      } catch (error) {
        console.log(error);
      }
    };

    const deleteUser = async (id: number) => {
      try {
        await api.delete("/customer?id=" + id);
        collectData();
        console.log(id);
      } catch (error) {
        console.log(error);
      }
    };

    const filteredUsers = ref<User[]>([]);

    const filterUsers = () => {
      filteredUsers.value = responseData.value.filter((user) => {
        return user.name.toLowerCase().includes(props.filterText.toLowerCase());
      });
    };

    watch(responseData, () => {
      filterUsers();
    });

    watch(
      () => props.filterText,
      () => {
        filterUsers();
      }
    );

    collectData();

    setInterval(collectData, 5000);

    return { filteredUsers, deleteUser };
  },
};
</script>


<style scoped>
button {
  transition: transform 0.3s ease-in-out;
}
p {
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>