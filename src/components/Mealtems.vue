<template>
    <div class="card lg:w-96 md:w-80 bg-base-100 h-full shadow-xl">
        <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
            <figure><img :src="meal.strMealThumb" :alt="strMeal" class="object-cover rounded-md" /></figure>
        </router-link>
        <div class="card-body flex justify-between">
            <h4 class="card-title font-semibold">{{ meal.strMeal }}</h4>

            <div class="card-actions justify-end">
                <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
                <router-link to="/" class="btn btn-active btn-neutral">
                    Readmore
                </router-link>
            </div>
        </div>
    </div>
</template>
<script setup>
import YoutubeButton from '../components/YoutubeButton.vue'

const { meal } = defineProps({
    meal: {
        required: true,
        type: Object
    }
})
</script>


