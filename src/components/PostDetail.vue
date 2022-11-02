<script setup>
import { defineEmits, ref, defineProps } from "vue";
const props = defineProps({
    titulo:{
        name: String,
        required: true
    },
    content:{
        name: String,
        required: false,
        default: "No tiene contenido"
    }
})
const emits = defineEmits(['sayHi'])

let message = ref('')
const handleClick = ()=>{
    emits("sayHi", message.value)
}
</script>
<template>
    <div class="post">
        <h3>{{props.titulo}}</h3>
        <p>{{props.content}}</p>
        <input type="text" v-model="message">
        <button @click="handleClick">Di hola</button>
    </div>
</template>
<style scoped>
.post{
    width: 300px;
    height: 200px;
    background-color: antiquewhite;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
}
</style>