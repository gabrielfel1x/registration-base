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

    <button
      class="m-auto bg-gray-900 text-gray-100 px-14 p-2 rounded-md hover:transform hover:scale-105"
      type="submit"
    >
      REGISTER
    </button>
    <button @click="changeTrashView" type="button">DELETE USER</button>

  </form>
</template>

<script>
import { api } from "../plugins/api";
import { ref } from "vue";

export default {
  name: "BaseForm",
  setup() {
    const formData = ref({
      name: "",
      email: "",
    });

    const warning = ref(false);
    const warningMsg = ref("campos vazios!");

    const submitForm = async () => {
      if (formData.value.name !== "" || formData.value.email !== "") {
        try {
          const submitResponse = await api.post("/customer", formData.value);
          alert("registered successfully", submitResponse);
          warning.value = false;
          formData.value.name = "";
          formData.value.name = "";
        } catch (error) {
          alert("error when registering user", error);
        }
      } else {
        warning.value = true;
        warningMsg.value = "please fill in all fields";
      }
    };

    return { formData, submitForm, warningMsg, warning };
  },
  props: {
    changeTrashView: Function
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
  @apply mb-4 mr-4
}
</style>