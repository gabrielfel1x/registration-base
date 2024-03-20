<template>
  <ListSection>
    <p>Customer List</p>
    <DefaultBox v-for="user in responseData" :key="user.id" class="flex">
      <div class="flex flex-col items-start m-auto">
        <p>
          Name:
          {{ `${user.name}` }}
        </p>
        <p>
          Email:
          {{ `${user.email}` }}
        </p>
      </div>

      <button class="m-auto">
        <i class="fa-solid fa-trash"></i>
      </button>
    </DefaultBox>
  </ListSection>
</template>

<script lang="ts">
import DefaultBox from "./DefaultBox.vue";
import ListSection from "./ListSection.vue";
import { api } from "../plugins/api";
import { ref } from "vue";

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
    return { responseData, collectData };
  },
  mounted() {
    this.collectData();
  },
};
</script>
