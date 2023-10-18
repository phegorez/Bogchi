<template>
    <div class="flex flex-col p-8 pb-0 items-center justify-center">
        <h2 class="text-2xl italic">Sort by {{ route.params.ingredients }}</h2>
        <Meals :meals="meals" />
    </div>
</template>
<script setup>
import { computed, onMounted, watch } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import Meals from '../components/Meals.vue'



const route = useRoute()
const meals = computed(() => store.state.mealByIngredient)

watch(() => {
    store.dispatch('searchMealByIngredient', route.params.ingredients)
})

onMounted(() => {
    store.dispatch('searchMealByIngredient', route.params.ingredients)
})
</script>
