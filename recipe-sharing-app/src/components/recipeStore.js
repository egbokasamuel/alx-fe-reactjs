import create from "zustand";

// Zustand store
const useRecipeStore = create((set) => ({
  recipes: [], // Array of recipes
  searchTerm: "", // Current search term
  filteredRecipes: [], // Array of filtered recipes

  // Function to set the search term and filter recipes
  setSearchTerm: (term) =>
    set((state) => {
      const searchTerm = term.toLowerCase();
      const filteredRecipes = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm)
      );

      return { searchTerm: term, filteredRecipes };
    }),

  // Function to add a new recipe and re-filter recipes
  addRecipe: (newRecipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];
      const filteredRecipes = updatedRecipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );

      return { recipes: updatedRecipes, filteredRecipes };
    }),

  // Function to delete a recipe and re-filter recipes
  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== id);
      const filteredRecipes = updatedRecipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );

      return { recipes: updatedRecipes, filteredRecipes };
    }),

  // Function to update a recipe and re-filter recipes
  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      const filteredRecipes = updatedRecipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );

      return { recipes: updatedRecipes, filteredRecipes };
    }),

  // Function to set the initial list of recipes and apply the current filter
  setRecipes: (recipes) =>
    set((state) => ({
      recipes,
      filteredRecipes: recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
}));

export { useRecipeStore };
