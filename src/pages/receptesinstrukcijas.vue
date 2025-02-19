<template>
  <div v-if="recipe" class="recipe-details">
    <!-- Recipe Title and Cooking Info -->
    <h1>{{ recipe.title }}</h1>
    <div class="recipe-info">
      <p>⏱️ Gatavošana: {{ recipe.cookingTime }}</p>
      <p>⭐ Sarežģītība: {{ recipe.difficulty }}</p>
    </div>

    <!-- Recipe Image -->
    <img :src="recipe.image" alt="Recipe Image" class="recipe-image" />

    <!-- Description -->
    <p class="description"><strong>Apraksts:</strong> {{ recipe.description }}</p>

    <!-- Ingredients & Instructions Side by Side -->
    <div class="recipe-content">
      <!-- Ingredients -->
      <div class="ingredients">
        <select v-model="servings" id="portion-size" @change="updateIngredients">
          <option v-for="portion in portionSizes" :key="portion" :value="portion">{{ portion }}</option>
        </select>
        <h2>Sastāvdaļas:</h2>
        <ul>
          <li v-for="(ingredient, index) in adjustedIngredients" :key="index">
            {{ ingredient }}
          </li>
        </ul>
      </div>

      <!-- Instructions -->
      <div class="instructions">
        <h2>Kā pagatavot:</h2>
        <ul>
          <li v-for="(step, index) in recipe.instructions" :key="index">
            {{ step }}
          </li>
        </ul>
      </div>
    </div>

    <!-- Back Button -->
    <button class="back-btn" @click="$router.push('/receptes')">Atpakaļ</button>
  </div>
  <div v-else>
    <h1>Recepte nav atrasta!</h1>
    <button @click="$router.push('/receptes')">Atpakaļ</button>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      servings: "1 porcija",
      portionSizes: ["1 porcija", "2 porcijas", "3 porcijas", "4 porcijas", "5 porcijas"],
      recipe: null,
      baseIngredients: [],
      recipes: [
        {
          id: 1,
          title: "Burgeris",
          image: "/Burgers.jpg",
          description: "Sulīgs burgeris ar sieru.",
          cookingTime: "25 min",
          difficulty: "Viegli",
          ingredients: [
            "1 burgera maizīte",
            "1 liellopa kotlete",
            "1 šķēle siera",
            "Salāti, tomāti, marinēti gurķi",
            "Mērces pēc izvēles",
          ],
          instructions: [
            "Sakarsē pannu un apcep burgera kotleti.",
            "Apcep burgermaizi ar sviestu.",
            "Uzliec kotleti uz maizes un pievieno sieru.",
            "Pievieno mērces un dārzeņus pēc izvēles.",
            "Saliec visu kopā un pasniedz!",
          ],
        },
        {
          id: 2,
          title: "Pelmeņi",
          image: "/Pelmeni.jpg",
          description: "Garšīgi pelmeņi ar gaļu.",
          cookingTime: "15 min",
          difficulty: "Ļoti viegli",
          ingredients: ["200g pelmeņu", "1L ūdens", "Sāls", "Sviests vai skābais krējums"],
          instructions: [
            "Uzvāri ūdeni ar sāli.",
            "Pievieno pelmeņus un vāri 7 minūtes.",
            "Nokāš ūdeni un pievieno sviestu vai skābo krējumu.",
            "Pasniedz ar zaļumiem un garšvielām.",
          ],
        },
        {
          id: 3,
          title: "Pica",
          image: "/Pica.jpg",
          description: "Margarita pica ar tomātiem un sieru.",
          cookingTime: "30 min",
          difficulty: "Vidēji",
          ingredients: [
            "250g miltu",
            "1/2 paciņa rauga",
            "120ml ūdens",
            "100g tomātu mērces",
            "150g mocarellas siera",
            "Tomāti, baziliks",
          ],
          instructions: [
            "Sagatavo picu mīklu un ļauj tai uzrūgt.",
            "Izveltnē mīklu un uzklāj tomātu mērci.",
            "Pievieno sieru un tomātu šķēles.",
            "Cep 220°C 15 minūtes.",
            "Pasniedz ar svaigiem bazilika lapām.",
          ],
        },
        {
          id: 4,
          title: "Sušī",
          image: "/Sushi.jpg",
          description: "Japāņu suši ar laša gabaliņiem.",
          cookingTime: "40 min",
          difficulty: "Grūti",
          ingredients: [
            "200g suši rīsu",
            "2 nori lapas",
            "100g svaiga laša",
            "Sojas mērce, vasabi",
            "Gurķis vai avokado pēc izvēles",
          ],
          instructions: [
            "Sagatavo suši rīsus un ļauj tiem atdzist.",
            "Izklāj rīsus uz nori lapas un pievieno laša šķēles.",
            "Sarullē suši ar paklājiņu.",
            "Sagriez rullīšus un pasniedz ar sojas mērci un vasabi.",
          ],
        },
      ],
    };
  },
  computed: {
    multiplier() {
      return parseInt(this.servings) || 1;
    },
    adjustedIngredients() {
      return this.baseIngredients.map(ingredient => {
        if (!ingredient.amount) return ingredient.original;
        const newAmount = ingredient.amount * this.multiplier;
        return `${this.formatAmount(newAmount)} ${ingredient.unit} ${ingredient.name}`.trim();
      });
    }
  },
  methods: {
    parseIngredient(ingredient) {
      const match = ingredient.match(/^((\d+|\d+\/\d+|\d+\.\d+))\s*(\D*)/);
      if (!match) return { original: ingredient };
      
      const amount = eval(match[1].replace('/', '.')); // Safe here because input is controlled
      const parts = match[3].split(/([a-zA-Z]+)/).filter(Boolean);
      
      return {
        original: ingredient,
        amount: amount,
        unit: parts[0]?.trim() || '',
        name: parts.slice(1).join(' ').trim()
      };
    },
    formatAmount(amount) {
      return amount % 1 === 0 ? amount.toString() : amount.toFixed(1).replace('.0', '');
    },
    updateIngredients() {
      this.baseIngredients = this.recipe.ingredients.map(ing => this.parseIngredient(ing));
    }
  },
  created() {
    this.recipe = this.recipes.find(r => r.id == this.id);
    this.updateIngredients();
  }
};
</script>

<style scoped>
* {
  font-family: monospace;
}

.recipe-details {
  max-width: 700px;
  margin: auto;
  padding: 20px;
  text-align: center;
}

.recipe-info {
  font-size: 18px;
  margin: 10px 0;
}

.recipe-image {
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  margin: 20px 0;
}

.description {
  font-size: 18px;
  margin-bottom: 15px;
}

/* FLEXBOX for side-by-side layout */
.recipe-content {
  display: flex;
  justify-content: space-between;
  text-align: left;
  margin-top: 20px;
}

.ingredients, .instructions {
  width: 48%; /* Each section takes up about half the width */
}

.ingredients h2, .instructions h2 {
  font-size: 20px;
  margin-bottom: 5px;
}

.ingredients ul, .instructions ul {
  list-style: none;
  padding: 0;
}

.ingredients li, .instructions li {
  margin: 5px 0;
}

.back-btn {
  margin-top: 15px;
  padding: 8px 15px;
  background-color: #ff4500;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.back-btn:hover {
  background-color: #d93d00;
}

#portion-size {
  padding: 8px 12px;
  border: 2px solid #ff4500;
  border-radius: 5px;
  background-color: white;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 15px;
  width: 100%;
  max-width: 200px;
}

#portion-size:focus {
  outline: none;
  border-color: #d93d00;
}

/* RESPONSIVE: Stack on smaller screens */
@media (max-width: 600px) {
  .recipe-content {
    flex-direction: column;
  }
  .ingredients, .instructions {
    width: 100%;
  }
}
</style>
