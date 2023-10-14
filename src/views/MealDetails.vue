<template>
    <div class="max-w-[800px] mx-auto p-8">
        <pre>{{ meal }}</pre>
        <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="strMeal" class="my-4 max-w-full">
        <div class="grid grid-cols-1 md:grid-cols-3 text-lg py-2">
            <div>
                <strong class="font-bold">Category : </strong>{{ meal.strCategory }}
            </div>
            <div>
                <strong class="font-bold">Area : </strong>{{ meal.strArea }}
            </div>
            <div>
                <strong class="font-bold">Tags : </strong>{{ meal.strTags }}
            </div>
        </div>

        <div class="my-4">
            {{ meal.strInstructions }}
        </div>

        <div class="overflow-x-auto">
            <table class="table flex">
                    <!-- head -->
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Ingredients</th>
                            <th>Measure</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="(el, index) in 20">
                            <tr v-if="meal[`strIngredient${index + 1}`]">
                                <td>{{ index + 1 }}</td>
                                <td>{{ meal[`strIngredient${index + 1}`] }}</td>
                                <td>{{ meal[`strMeasure${index + 1}`] }}</td>
                            </tr>
                        </template>
                    </tbody>
            </table>
        </div>
        <div class="mt-4 flex gap-8 justify-center">
            <YoutubeButton :href="meal.strYoutube">Go to Youtube</YoutubeButton>
            <a :href="meal.strSource" target="_blank" class="btn btn-outline btn-neutral">
                View Original Source
            </a>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axiosClient from '../axiosClient';
import YoutubeButton from '../components/YoutubeButton.vue';

const route = useRoute()
const meal = ref({})

onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`)
        .then(({ data }) => {
            meal.value = data.meals[0] || {}
        })
})
</script>
