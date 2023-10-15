<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-12 place-items-center">
        <MealItems v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
    <div v-if="!meals.length" class="flex justify-center text-gray-600">
        No Meals
    </div>
</template>
<script setup>
    import MealItems from './Mealtems.vue';

    const { meals } = defineProps({
        meals : {
            required : true,
            type : Array,
            default : () => []
        }
    })
</script>
