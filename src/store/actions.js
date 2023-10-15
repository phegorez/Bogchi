import axiosClient from '../axiosClient';

export function searchMeal({commit}, keyword) {
    axiosClient.get(`search.php?s=${keyword}`)
        .then(({data}) => {
            commit('setSearchedMeal', data.meals)
        })
}

export function searchMealByLetter({commit}, letter) {
    axiosClient.get(`search.php?f=${letter}`)
        .then(({data}) => {
            commit('setMealByLetter', data.meals)
        })
}

export function searchMealByIngredient({commit}, ingre) {
    axiosClient.get(`filter.php?i=${ingre}`)
        .then(({data}) => {
            commit('setMealByIngredient', data.meals)
        })
}