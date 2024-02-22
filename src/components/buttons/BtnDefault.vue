<template>
  <q-input
    v-model="text"
    type="text"
    outlined
    color="blue-9"
    placeholder="Nome e sobrenome"
    label="Nome"
    class="input-wrapper q-field--float"
    hide-bottom-space
    no-error-icon
    :rules="[(val) => val !== '' || 'Preencha o campo']"
  />
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    const text = ref('');
    return { text };
  },
};
</script>
<style>
.input-wrapper {
  position: relative;
}

.q-field__control {
  height: 40px;
  border-radius: 8px;
}

.input-wrapper .q-field__label {
  transform: translateY(0%);
  position: absolute;
  top: -22px;
  left: -10px;
  padding: 0 0px;
  font-size: 14px;
  font-weight: 500;
}

.q-field__label {
  color: black;
}

.input-wrapper .q-field__native {
  padding-top: 0px;
  padding-bottom: 0px;
}
</style>
