<template>
    <div class="p-8">
        <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
        <router-link 
            :to="{
                name:'byIngredients', 
                params: {ingredients : ingredient.strIngredient}
            }" 
            class="bg-white rounded p-5 mb-3 block" 
            v-for="ingredient of ingredients" 
            :key="ingredient.idIngredient"
        >
            <h3 class="text-2xl font-bold shadow mb-2">{{ ingredient.strIngredient }}</h3>
            <p>{{ ingredient.strDescription }}</p>
        </router-link>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import axiosClient from '../axiosClient';

const ingredients = ref([])

onMounted(() => {
    axiosClient.get(`list.php?i=`)
        .then(({data}) => {
            ingredients.value = data.meals
        })
})
</script>
