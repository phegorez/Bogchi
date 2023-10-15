<template>
    <div class="flex flex-col">
        <MealByLetter/>
    </div>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store'
import axiosClient from '../axiosClient.js'
import MealByLetter from './MealByLetter.vue';

const ingredients = ref([])

onMounted(async () => {
    const response = await axiosClient.get('/list.php?i=list')
    ingredients.value = response.data
})

</script>
