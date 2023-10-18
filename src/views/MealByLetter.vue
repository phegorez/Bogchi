<template>
    <div class="flex flex-col p-8 items-center justify-center">
        <div class="flex flex-wrap gap-3 mt-1 justify-center max-w-prose">
            <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="letter of letters" :key="letter" 
            class="border border-neutral rounded-md w-7 h-7 text-center align-middle transition duration-150 ease-in-out hover:scale-150  hover:bg-neutral-focus hover:text-white">
                {{ letter }}
            </router-link>
        </div>
        <Meals :meals="meals" v-if="meals.length" />
        <h1 v-else class="mt-10">Not found any meals on {{ route.params.letter }}</h1>
    </div>
</template>
<script setup>
import store from '../store';
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router'
import Meals from '../components/Meals.vue';

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
