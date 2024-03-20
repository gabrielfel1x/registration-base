<template>
  <form action="post" class="flex items-start flex-col bg-gray-200 rounded-md p-8 m-4 w-6/12 shadow-xl">
    <label>Name</label>
    <input type="text" placeholder="name" class="input" />

    <label>Email</label>
    <input type="email" placeholder="name@mail.com" class="input" />

    <button class="m-auto bg-gray-900 text-gray-100 px-14 p-2 rounded-md">POST</button>
  </form>
</template>

<script>
export default {
  name: "BaseForm",
};
</script>

<style scoped>
.input {
  @apply mb-5 p-2 border-solid border-2 rounded-md w-full;
}
</style>