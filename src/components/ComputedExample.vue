<script setup>
import {ref, computed} from 'vue'
let message = ref('')
const reverse = computed(()=>message.value.split('').reverse().join(''))
</script>
<template>
    <div>
        <input type="text" v-model="message">
        <h3>{{message}}</h3>
        <h3>{{reverse}}</h3>
    </div>
</template>
<style scoped></style>