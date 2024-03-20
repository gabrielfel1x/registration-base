<template>
  <ListSection>
    <p>Customer List</p>
    <DefaultBox v-for="user in responseData" :key="user.id" class="flex items-center justify-center">
      <div class="flex flex-col items-start m-16">
        
        <p>
          Name:
          {{ `${user.name}` }}
        </p>
        <p>
          Email:
          {{ `${user.email}` }}
        </p>
      </div>

      <button class="ml-auto mr-10">
        <i class="fa-solid fa-trash"></i>
      </button>
    </DefaultBox>
  </ListSection>
</template>

<script>
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
