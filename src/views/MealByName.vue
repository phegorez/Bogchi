<template>
    <div class="flex flex-col p-8 pb-0 items-center justify-center">
        <input type="text" v-model="keyword" placeholder="Search for Meals" class="input input-bordered w-full max-w-prose"
            @change="searchMeals" />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-12 place-items-center">

        <div class="card lg:w-96 md:w-80 bg-base-100 h-full shadow-xl" v-for="meal of meals" :key="meal.idMeal">
            <router-link :to="{name: 'mealDetails', params: {id : meal.idMeal}}">
                <figure><img :src="meal.strMealThumb" :alt="strMeal" class="object-cover"/></figure>
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

    </div>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import YoutubeButton from '../components/YoutubeButton.vue';

const route = useRoute()
const keyword = ref('')
const meals = computed(() => store.state.searchedMeals)

function searchMeals() {
    store.dispatch('searchMeal', keyword.value)
}

onMounted(() => {
    keyword.value = route.params.name
    if(keyword.value) {
        searchMeals()
    }
})

</script>
<style lang="">
    
</style>