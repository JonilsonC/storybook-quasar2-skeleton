<template>
  <q-card class="q-pa-lg q-mt-md">
    <!-- <q-card-section>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </q-card-section> -->
    <q-input
      v-model="text"
      type="text"
      outlined
      color="blue-9"
      placeholder="Nome e sobrenome"
      label="Nome"
      class="input-wrapper q-field--float q-mt-md"
      hide-bottom-space
      no-error-icon
      :rules="[(val) => val !== '' || 'Preencha o campo']"
    />
  </q-card>
</template>
<script>
import { ref } from 'vue';
export default {
  name: 'InputDefault',
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
  border-radius: 8px !important;
}

.input-wrapper .q-field__label {
  transform: translateY(0%) !important;
  position: absolute;
  top: -22px !important;
  left: -10px !important;
  padding: 0 0px !important;
  font-size: 14px;
  font-weight: 600;
}

.q-field__label {
  color: black;
}

.input-wrapper .q-field__native {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
}
</style>
