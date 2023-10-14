<template>
    <header class='navbar bg-neutral px-8 text-neutral-content items-center justify-between'>
        <router-link :to="{ name:'home'}">
            Home
        </router-link>
        <div class='flex gap-6'>
            <router-link :to="{name:'byName'}" class='px-2 h-full hover:bg-neutral-focus p-4 rounded-md'>
                Search Meals
            </router-link>
            <router-link :to="{name:'byLetter'}" class='px-2 h-full hover:bg-neutral-focus p-4 rounded-md'>
                Search By Letter
            </router-link>
            <router-link :to="{name:'byIngredients'}" class='px-2 h-full hover:bg-neutral-focus p-4 rounded-md'>
                Search By Ingredients
            </router-link>
        </div>
    </header>
</template>
<script setup>

</script>
