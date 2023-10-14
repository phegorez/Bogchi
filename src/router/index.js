import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MealByName from '../views/MealByName.vue'
import MealByLetter from '../views/MealByLetter.vue'
import MealByIngredients from '../views/MealByIngredients.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import GuestLayout from '../components/GuestLayout.vue'
import MealDetails from '../views/MealDetails.vue'


const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/by-name/:name?',
                name: 'byName',
                component: MealByName
            },
            {
                path: '/by-letter/:letter?',
                name: 'byLetter',
                component: MealByLetter
            },
            {
                path: '/by-ingredients/:ingredients?',
                name: 'byIngredients',
                component: MealByIngredients
            },
            {
                path: '/meal/:id',
                name: 'mealDetails',
                component: MealDetails
            },
        ]
    },

    {
        path: '/guest',
        component: GuestLayout,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router