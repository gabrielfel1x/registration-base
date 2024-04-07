<template>
  <form
    action="post"
    @submit.prevent="submitForm"
    class="flex items-center flex-col bg-gray-200 rounded-md p-8 m-4 w-6/12 shadow-xl"
  >
    <label
      ><p><i class="fa-solid fa-user"></i></p>
      <input
        type="text"
        placeholder="name"
        v-model="formData.name"
        class="input"
    /></label>

    <label
      ><p><i class="fa-solid fa-envelope"></i></p>
      <input
        type="email"
        placeholder="name@mail.com"
        v-model="formData.email"
        class="input"
    /></label>

    <p v-if="warning" class="text-red-700 ml-2">{{ warningMsg }}</p>
    <h2
      v-if="successfully"
      class="text-green-700 ml-2 font-semibold mb-8 text-2xl"
    >
      {{ successfullyMsg }}
    </h2>

    <div class="flex gap-10">
      <button
        class="m-auto bg-gray-900 text-gray-100 px-14 p-2 rounded-md hover:transform hover:scale-105"
        type="submit"
      >
        REGISTRAR
      </button>
      <button
        @click="openUsers"
        type="button"
        class="m-auto bg-gray-700 text-gray-100 px-14 p-2 rounded-md hover:transform hover:scale-105"
      >
        BUSCAR USUÁRIO
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
// @ts-ignore
import { api } from "../plugins/api";
import { ref } from "vue";
import type { Ref } from "vue";
import { defineProps } from "vue";

const formData: Ref<{ name: string; email: string }> = ref({
  name: "",
  email: "",
});

const props = defineProps({
  openUsers: Function as () => void,
});
props.openUsers;

const warning: Ref<Boolean> = ref(false);
const successfully: Ref<Boolean> = ref(false);
const warningMsg: Ref<string> = ref("campos vazios!");
const successfullyMsg: Ref<string> = ref("REGISTRADO COM SUCESSO!");

const submitForm: () => Promise<void> = async () => {
  if (formData.value.name !== "" || formData.value.email !== "") {
    try {
      const submitResponse = await api.post("/customer", formData.value);
      console.log(submitResponse);
      successfully.value = true;
      setTimeout(() => {
        successfully.value = false;
      }, 3000);
      warning.value = false;
      formData.value.name = "";
      formData.value.email = "";
    } catch (error) {
      alert("ERRO AO REGISTRAR USUÁRIO!");
    }
  } else {
    warning.value = true;
    warningMsg.value = "por favor preencha todos os campos!";
  }
};
</script>

<style scoped>
label {
  @apply w-4/5 flex justify-center items-center;
}
.input {
  @apply mb-5 p-2 border-solid border-2 rounded-md w-full focus:outline-none;
}
p {
  @apply mb-4 mr-4;
}
</style>