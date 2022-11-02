<script setup>
import PostDetail from './PostDetail.vue';

function showAlert(msge){
    alert (msge)
}
let info= [
    {
        title:"Este es el post 1",
        content:"Text de ejemplo 1"
    },
    {
        title:"Este es el post 2",
        content:"Texto de ejemplo 2"
    },
    {
        title:"Este es el post 3",
        content:"Texto de ejemplo 3"
    },
    {
        title:"Este es el post 4",
        content:"Texto de ejemplo 4"
    },
    {
        title:"Este es el post 5",
        content:"Texto de ejemplo 5"
    }
    ]
</script>
<template>
    <div class="container">
        <PostDetail v-for="elm in info" :key="elm.title" :titulo="elm.title" :content="elm.content" @say-hi="showAlert"/>
    </div>
</template>
<style scoped>
    .container{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>