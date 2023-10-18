<template>
    <div class="flex flex-col p-8 pb-0 items-center justify-center">
        <h1 class="text-4xl font-bold mb-4">Want some bogchi?</h1>
        <Meals :meals="meals"/>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import axiosClient from '../axiosClient.js'
import Meals from '../components/Meals.vue';

const meals = ref([])

onMounted(async () => {
    for (let i = 0; i < 12; i++) {

        const randomQueryParam = `?random=${Math.random()}`
        axiosClient
            .get(`random.php${randomQueryParam}`)
            .then(({data}) => meals.value.push(data.meals[0]))
    }
})

</script>