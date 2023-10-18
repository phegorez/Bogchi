<template>
    <div class="card sm:w-75 lg:w-96 md:w-60 bg-base-100 h-full shadow-xl hover:scale-105 transition duration-150 ease-in-out">
        <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
            <figure><img :src="meal.strMealThumb" :alt="strMeal" class="object-cover rounded-md" /></figure>
        </router-link>
        <div class="card-body flex justify-between">
            <h4 class="card-title font-semibold">{{ meal.strMeal }}</h4>
            <p class="mb-4">
                {{ truncatedInstructions }}
            </p>
            <div class="card-actions justify-end">
                <router-link :to="{name : 'mealDetails', params: {id: meal.idMeal}}" class="btn btn-outline btn-neutral">
                    Readmore
                </router-link>
            </div>
        </div>
    </div>
</template>
<script setup>
import YoutubeButton from '../components/YoutubeButton.vue'
import { truncateWords } from '../filters';

const truncatedInstructions = truncateWords(meal.strInstructions, 20)

const { meal } = defineProps({
    meal: {
        required: true,
        type: Object
    }
})
</script>


