<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { computed, ref } from "vue";
const vat = 21

let subtotal = ref('')

// const products = ref([
//   {
//     product1: {
//       name: "Vajilla",
//       price: 20,
//     },
//   },
//   {
//     product2: {
//       name: "Platos",
//       price: 40,
//     },
//   },
//   {
//     product3: {
//       name: "Cuchillos",
//       price: 5,
//     },
//   },
// ]);
const total = computed(()=> (vat * subtotal.value)/100)
</script>
<template>
  <div class="container">

    <label for=""></label>
    <input type="number" v-model="subtotal">
    <h3>Total de impuestos a pagar {{total}} {{vat}}% </h3>
  </div>
</template>
<style scoped>

</style>
