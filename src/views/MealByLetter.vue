<template>
    <div class="flex flex-col p-8 items-center justify-center">
        <div class="flex gap-2 mt-2 justify-center max-w-prose">
            <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="letter of letters" :key="letter">
                {{ letter }}
            </router-link>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-12 place-items-center">
            <MealItems v-for="meal of meals" :key="meal.idMeal" :meal="meal" v-if="meals"/>
            <h1 v-else>Not found On {{ route.params.letter }}</h1>
        </div>
    </div>
    

</template>
<script setup>
import store from '../store';
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router'
import MealItems from '../components/Mealtems.vue';

const route = useRoute()
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const meals = computed(() => store.state.mealByLetter)



watch(route, () => {
    store.dispatch('searchMealByLetter', route.params.letter)
})

onMounted(() => {
    store.dispatch('searchMealByLetter', route.params.letter)
})
</script>
