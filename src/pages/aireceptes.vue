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
  
      <!-- Divider Line -->
      <div class="divider"></div>
  
      <!-- Recipe Generation Section -->
      <div class="recipe-results">
        <div class="generated-recipes" v-if="recipes.length">
          <h2>Ģenerētās Receptes:</h2>
          <div class="recipe-grid">
            <div v-for="recipe in recipes" :key="recipe.id" class="recipe-card">
              <h3>{{ recipe.title }}</h3>
              <p>{{ recipe.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AIreceptes",
    data() {
      return {
        ingredientCategories: [
          { name: 'Pantry', ingredients: ['Piens', 'Siers', 'Milti', 'Cukurs', 'Sviests', 'Sāls'] },
          { name: 'Fruits', ingredients: ['Tomāti', 'Banāni', 'Apelsīni'] },
          { name: 'Meat', ingredients: ['Vistas fileja', 'Cūkgaļa', 'Liellopa gaļa'] }
        ],
        selectedIngredients: [],
        recipes: [],
      };
    },
    methods: {
      toggleIngredient(ingredient) {
        if (this.selectedIngredients.includes(ingredient)) {
          this.selectedIngredients = this.selectedIngredients.filter(i => i !== ingredient);
        } else {
          this.selectedIngredients.push(ingredient);
        }
        
        this.generateRecipe(); // Generate recipe whenever an ingredient is selected
      },
      generateRecipe() {
        if (this.selectedIngredients.length === 0) {
          this.recipes = []; // Clear the recipes if no ingredients are selected
          return;
        }
        
        // Placeholder recipes (later this will be AI-generated based on selected ingredients)
        this.recipes = [
          { id: 1, title: "Omlete", description: `Izmanto ${this.selectedIngredients.join(', ')} lai pagatavotu gardu omleti.` },
          { id: 2, title: "Pankūkas", description: `Izmanto ${this.selectedIngredients.join(', ')} lai pagatavotu ideālas pankūkas!` },
        ];
      },
    },
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
  
  .ingredient-btn:hover {
    background-color: #ddd;
  }
  
  .divider {
    width: 2px;
    background-color: black;
    height: 100%;
    margin: 0 2rem;
  }
  
  .recipe-results {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .generated-recipes {
    width: 100%;
  }
  
  .recipe-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5rem;
  }
  
  .recipe-card {
    background-color: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 400px;
    margin: auto;
  }
  
  @media screen and (max-width: 768px) {
    .ai-recipe-page {
      flex-direction: column;
      align-items: center;
    }
    .ingredient-window {
      width: 100%;
      height: auto;
    }
    .divider {
      display: none;
    }
    .recipe-results {
      width: 100%;
    }
  }
  </style>
  