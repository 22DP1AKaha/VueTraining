<template>
  <div class="ai-recipe-page">
    <!-- Ingredient Selection Section -->
    <div class="ingredient-window">
      <div class="ingredient-categories">
        <div class="category-card" v-for="(category, index) in ingredientCategories" :key="index">
          <h3>{{ category.name }}</h3>
          <div class="ingredient-list">
            <button
              v-for="ingredient in category.ingredients"
              :key="ingredient"
              @click="toggleIngredient(ingredient)"
              :class="{
                selected: selectedIngredients.includes(ingredient),
                'ingredient-btn': true
              }"
            >
              {{ ingredient }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Recipe Generation Section -->
    <div class="recipe-results">
      <div class="generated-recipes" v-if="recipes.length">
        <h2>Ģenerētās Receptes:</h2>
        <div class="recipe-grid">
          <div v-for="recipe in recipes" :key="recipe.id" class="recipe-card">
            <h3>{{ recipe.title }}</h3>
            <img :src="recipe.image" alt="Recipe Image" class="recipe-image" />
          </div>
        </div>
      </div>
      <div v-else>
        <p v-if="selectedIngredients.length">Nav atrastas receptes ar izvēlētajām sastāvdaļām.</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AIreceptes",
  data() {
    return {
      ingredientCategories: [
        { name: "Pantry", ingredients: ["milk", "cheese", "flour", "sugar", "butter", "salt"] },
        { name: "Fruits", ingredients: ["tomato", "banana", "orange"] },
        { name: "Meat", ingredients: ["chicken", "pork", "beef"] }
      ],
      selectedIngredients: [],
      recipes: [],
      apiKey: "ac1ac14879e04ca58ec5e926da8e1293" 
    };
  },
  methods: {
    toggleIngredient(ingredient) {
      if (this.selectedIngredients.includes(ingredient)) {
        this.selectedIngredients = this.selectedIngredients.filter(i => i !== ingredient);
      } else {
        this.selectedIngredients.push(ingredient);
      }
      this.generateRecipe();
    },

    async generateRecipe() {
      if (this.selectedIngredients.length === 0) {
        this.recipes = [];
        return;
      }

      const ingredientQuery = this.selectedIngredients.join(",");
      const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientQuery}&number=5&ignorePantry=true&apiKey=${this.apiKey}`;

      console.log("Request URL:", url); // DEBUG: Check if API request is correct

      try {
        const response = await axios.get(url);

        console.log("API Response:", response.data); // DEBUG: Log the response

        if (!response.data || response.data.length === 0) {
          console.warn("No recipes found for these ingredients.");
          this.recipes = [];
          return;
        }

        // Extract and store recipes
        this.recipes = response.data.map(recipe => ({
          id: recipe.id,
          title: recipe.title,
          image: recipe.image
        }));

        console.log("Filtered Recipes:", this.recipes); // DEBUG: See final recipes

      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    }
  }
};
</script>

<style scoped>
.ai-recipe-page {
  display: flex;
  padding: 2rem;
  height: 100vh;
}

.ingredient-window {
  width: 30%;
  height: 100%;
  overflow-y: auto;
  padding-right: 1rem;
}

.ingredient-categories {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.category-card {
  background: linear-gradient(135deg, #FFF5E1, #FFE4B5);
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.category-card h3 {
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
}

.ingredient-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.ingredient-btn {
  background-color: #f5f5f5;
  border: 2px solid #ccc;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  font-size: 1.1rem;
}

.ingredient-btn.selected {
  background-color: #4caf50;
  color: white;
}

.recipe-results {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.recipe-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.recipe-card {
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.recipe-image {
  width: 100%;
  border-radius: 8px;
}
</style>
