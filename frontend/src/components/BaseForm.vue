<template>
  <form
    action="post"
    @submit.prevent="submitForm"
    class="flex items-start flex-col bg-gray-200 rounded-md p-8 m-4 w-6/12 shadow-xl"
  >
    <label>Name</label>
    <input
      type="text"
      placeholder="name"
      v-model="formData.name"
      class="input"
    />

    <label>Email</label>
    <input
      type="email"
      placeholder="name@mail.com"
      v-model="formData.email"
      class="input"
    />
    <p v-if="warning">{{ warningMsg }}</p>

    <button
      class="m-auto bg-gray-900 text-gray-100 px-14 p-2 rounded-md"
      type="submit"
    >
      POST
    </button>
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
        warningMsg.value = "please fill in all fields"
      }
    };

    return { formData, submitForm, warningMsg, warning };
  },
};
</script>

<style scoped>
.input {
  @apply mb-5 p-2 border-solid border-2 rounded-md w-full;
}
</style>