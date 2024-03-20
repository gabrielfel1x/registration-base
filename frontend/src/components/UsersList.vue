<template>
  <ListSection>
    <p v-for="item in list" :key="item.id">{{ `${item.name}, ${item.email}` }}</p>
  </ListSection>
</template>

<script>
import ListSection from "./ListSection.vue";

export default {
  setup() {
    const list = [
      { id: 1, name: "test", email: "test@mail.com"},
      { id: 2, name: "test", email: "test@mail.com"},
      { id: 3, name: "test", email: "test@mail.com"},
      { id: 4, name: "test", email: "test@mail.com"},
      { id: 5, name: "test", email: "test@mail.com"},
      { id: 6, name: "test", email: "test@mail.com"},
      { id: 7, name: "test", email: "test@mail.com"},
      { id: 8, name: "test", email: "test@mail.com"},
      { id: 9, name: "test", email: "test@mail.com"},
    ];

    return { list };
  },
  components: {
    ListSection,
  },
};
</script>
