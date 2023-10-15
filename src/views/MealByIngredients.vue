<template>
    <Meals :meals="meals"/>
</template>
<script setup>
import { computed, onMounted } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import Meals from '../components/Meals.vue'



const route = useRoute()
const meals = computed(() => store.state.mealByIngredient)

onMounted(() => {
    store.dispatch('searchMealByIngredient', route.params.ingredients)
})
</script>
