<template>
    <div @click="toTarget">
        <img :src="ico" alt="">
        <span>{{title}}</span>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
defineProps({
  title: String,
  url:String,
  ico:String
})
let router = useRouter();
const toTarget=()=>{
    router.push(url)
}
const count = ref(0)
</script>
<style scoped>
a {
  color: #42b983;
}
</style>
