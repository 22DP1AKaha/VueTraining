<template>
  <div class="recipe-page">
    <h1>Recepšu Meklētājs</h1>

    <!-- Search Bar -->
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Meklēt recepti..."
      class="search-bar"
    />

    <!-- Recipe Grid -->
    <div class="recipe-grid">
      <div
        v-for="recipe in filteredRecipes"
        :key="recipe.id"
        class="recipe-card"
        @click="showRecipe(recipe.id)"
      >
        <img :src="recipe.image" :alt="recipe.title" />
        <h2>{{ recipe.title }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Receptes',
  data() {
    return {
      searchQuery: "",
      recipes: [
        { id: 1, title: "Burgeris", image: "/Burgers.jpg" },
        { id: 2, title: "Pelmeņi", image: "/Pelmeni.jpg" },
        { id: 3, title: "Pica", image: "/Pica.jpg" },
        { id: 4, title: "Sušī", image: "/Sushi.jpg" },
      ],
    };
  },
  computed: {
    filteredRecipes() {
      return this.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    showRecipe(id) {
      this.$router.push(`/recepte/${id}`);
    },
  },
};
</script>

<style scoped>
.recipe-page {
  font-family: monospace;
  text-align: center;
  padding: 2rem;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

/* Search Bar */
.search-bar {
  width: 50%;
  padding: 0.8rem;
  font-size: 1.2rem;
  border: 2px solid #ccc;
  border-radius: 8px;
  outline: none;
}

/* Recipe Grid */
.recipe-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Max 4 items per row */
  gap: 1.5rem;
  justify-items: center;
  margin-top: 2rem;
}

/* Responsive Grid */
@media (max-width: 1024px) {
  .recipe-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 per row on medium screens */
  }
}

@media (max-width: 600px) {
  .recipe-grid {
    grid-template-columns: repeat(1, 1fr); /* 1 per row on small screens */
  }
}

/* Recipe Cards */
.recipe-card {
  font-family: monospace;
  background: linear-gradient(135deg, #FFF5E1, #FFE4B5);
  padding: 1rem;
  width: 250px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.recipe-card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.recipe-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
}

.recipe-card h2 {
  font-size: 1.5rem;
  margin-top: 0.5rem;
}
</style>