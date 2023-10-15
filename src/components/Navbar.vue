<template>
    <header class="navbar bg-neutral px-8 text-neutral-content items-center justify-between0">
        <div class="flex flex-wrap w-full items-center justify-between">
            <a href="https://flowbite.com/" class="flex items-center">
                <router-link :to="{ name: 'home' }" class="flex items-center">
                    <img src="../assets/logo.png" class="h-8 mr-3" alt="Flowbite Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Bogchi</span>
                </router-link>
            </a>

            <button data-collapse-toggle="navbar-default" type="button" @click="toggleMenu"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>

            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul
                    class="font-medium flex flex-col p-4 md:p-0 mt-4 border md:bg-transparent rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                    <li>
                        <router-link :to="{ name: 'byName' }"
                            class='block py-4 pl-3 pr-4 hover:bg-neutral-focus text-white rounded'>
                            Search Meals
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'byLetter' }"
                            class='block py-4 pl-3 pr-4 hover:bg-neutral-focus text-white rounded'>
                            Search By Letter
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'ingredients' }"
                        class='block py-4 pl-3 pr-4 hover:bg-neutral-focus text-white rounded'>
                            Search By Ingredients
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>
<script setup>
function toggleMenu() {
    const menu = document.getElementById('navbar-default')
    menu.classList.toggle('hidden')
}
</script>
