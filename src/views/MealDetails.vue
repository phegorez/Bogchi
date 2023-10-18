<template>
    <div class="max-w-[800px] mx-auto p-8">
        <h1 class="text-4xl font-bold mb-5 italic">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="strMeal" class="my-4 w-full max-w-full rounded-md">
        <div class="grid grid-cols-1 md:grid-cols-3 p-4 text-lg py-2 bg-secondary text-secondary-content rounded-md">
            <div>
                <strong class="font-bold">Category : </strong>
                <span class="text-sm">{{ meal.strCategory }}</span>
            </div>
            <div>
                <strong class="font-bold">Area : </strong>
                <span class="text-sm">{{ meal.strArea }}</span>
            </div>
            <div class="break-words">
                <strong class="font-bold">Tags : </strong>
                <span class="text-sm" v-if="meal.strTags">{{ meal.strTags }}</span>
                <span class="text-sm" v-else>-</span>
            </div>
        </div>

        <div class="my-4 break-all bg-primary-content rounded-md text-white p-4">
            {{ meal.strInstructions }}
        </div>

        <div class="overflow-x-auto bg-base-300 text-neutral-focus rounded-md">
            <table class="table flex">
                <!-- head -->
                <thead class="text-neutral-focus font-bold">
                    <tr>
                        <th>#</th>
                        <th>Ingredients</th>
                        <th>Measure</th>
                    </tr>
                </thead>
                <tbody class="text-sm">
                    <template v-for="(el, index) in 20">
                        <tr v-if="meal[`strIngredient${index + 1}`]">
                            <td>{{ index + 1 }}</td>
                            <td class="hover:-translate-y-1 hover:-translate-x-1 hover: hover:font-bold transition duration-300 ease-in-out"><router-link :to="{name : 'byIngredients', params: {ingredients : meal[`strIngredient${index + 1}`]}}">{{ meal[`strIngredient${index + 1}`] }}</router-link></td>
                            <td>{{ meal[`strMeasure${index + 1}`] }}</td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
        <div class="mt-4 flex md:gap-8 justify-center sm:gap-2">
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
