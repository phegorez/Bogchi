<template>
    <div class="flex flex-col p-8 pb-0 items-center justify-center">
        <input type="text" v-model="keyword" placeholder="Search for Meals" class="input input-bordered w-full max-w-prose"
            @change="searchMeals" 
        />
        <Meals :meals="meals"/>
    </div>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import Meals from '../components/Meals.vue'

const route = useRoute()
const keyword = ref('')
const meals = computed(() => store.state.searchedMeals)

function searchMeals() {
    if(keyword.value) {
        store.dispatch('searchMeal', keyword.value)
    } else {
        store.commit('setSearchedMeal', [])
    }
}

onMounted(() => {
    keyword.value = route.params.name
    if (keyword.value) {
        searchMeals()
    }
})

</script>
<style lang="">
    
</style>