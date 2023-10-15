export function setSearchedMeal(state, meals) {
    state.searchedMeals = meals || [] 
}
export function setMealByLetter(state, meals) {
    state.mealByLetter = meals || []
}
export function setMealByIngredient(state, meals) {
    state.mealByIngredient = meals || []
}