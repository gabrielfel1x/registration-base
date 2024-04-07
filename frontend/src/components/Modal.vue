<template>
  <div
    class="modal flex items-center justify-center flex-col bg-gray-400 text-gray-900 rounded-md m-4 w-6/12 shadow-xl"
  >
    <div class="modalContent fixed">
      <button
        @click="closeModal()"
        class="bg-gray-500 text-gray-100 rounded-xl p-2 font-semibold hover:opacity-80"
      >
        VOLTAR
      </button>
      <section
        class="header flex flex-col justify-center items-center w-full min-h-96"
      >
        <h3 class="mt-4 font-semibold">FILTRAR USUÁRIOS</h3>
        <input
          type="text"
          name="userName"
          v-model="inputChange"
          placeholder="Digite o user"
          @input="emitFilter"
          class="border-none rounded-lg outline-none px-3 py-1"
        />
        <div>
          <UsersList
            :filterText="inputChange"
            class="w-full overflow-auto max-h-64 p-4"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import UsersList from "../components/UsersList.vue";

export default defineComponent({
  setup(props, { emit }) {
    const inputChange = ref<string>("");

    const emitFilter = () => {
      emit("filter", inputChange.value);
    };

    return {
      inputChange,
      emitFilter,
      props,
    };
  },
  components: { UsersList },
  props: {
    closeModal: {
      type: Function,
      required: true,
    },
  },
});
</script>

<style>
.modal {
  z-index: 1;
  position: fixed;
  margin-bottom: 190px;
  height: 480px;
  @apply max-w-4xl;
}
</style>
