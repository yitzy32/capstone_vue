<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p>
      <label for="" class="centered-text">Title:</label> <input class="centered-text" type="text" v-model="recipes[recipes.length - 1].title">
    </p>
    <p>
      <label for="" class="centered-text">prep_time:</label> <input class="centered-text" type="text" v-model="recipes[recipes.length - 1].prep_time">
    </p>
    <p>
      <label for="" class="centered-text">servings:</label> <input class="centered-text" type="text" v-model="recipes[recipes.length - 1].servings">
    </p>
    <!-- <p>
      user_id: <input class="centered-text" type="text">
    </p> -->
    <p>
      <label for="" class="centered-text">source_url:</label> <input class="centered-text" type="text" v-model="recipes[recipes.length - 1].source_url">
    </p>

    <button v-on:click="addRecipe()" class="button primary fit">add recipe</button>
    <div v-for="recipe in recipes">
      {{ recipe.title }}{{ recipe.prep_time }}{{ recipe.servings }}{{ recipe.source_url }}
    </div>
    <p>
      <label for="" class="centered-text">direction number:</label> <input class="centered-text" type="text" v-model="directions[directions.length - 1].number">
    </p>
    <p>
      <label for="" class="centered-text">direction step:</label> <input class="centered-text" type="text" v-model="directions[directions.length - 1].step">
    </p>
    <button v-on:click="addDirection()" class="button primary fit">Add direction</button>
    <div v-for="direction in directions">
    {{ direction.number }}{{ direction.step }}
    </div>

    <p>
      <label for="" class="centered-text">Ingredient Name:</label>
      <select id="" v-model="ingredients[ingredients.length -1].name">
        <option v-for="ingredientFromDb in ingredientsFromDb" v-bind:value="ingredientFromDb.name">
          {{ ingredientFromDb.name }}
        </option>
      </select>
      
      <label for="" class="centered-text">Measurement In Ml:</label> 
      <input class="centered-text" type="text" v-model="ingredients[ingredients.length - 1].measurement_in_ml">
      <label class="centered-text">Number Of:</label> <input class="centered-text" type="text" v-model="ingredients[ingredients.length - 1].number_of">
    </p>
    <button v-on:click="addIngredient()" class="button primary fit">add ingredient</button>
      <div v-for="ingredient in ingredients">
      {{ ingredient.name }} {{ ingredient.measurement_in_ml }} {{ ingredient.number_of }}
      </div>
    <p>
      <label for="" class="centered-text">Image Url:</label> <input class="centered-text" type="text" v-model="images[images.length - 1].url">
      <button v-on:click="addImage()" class="button primary fit">add image</button>
    </p>
    <p>
      <label for="" class="centered-text">ADD THIS RECIPE:</label> <button v-on:click="createRecipe()" class="button primary fit">ADD</button>
    </p>
    <div v-for="image in images">
      {{ image.url }}
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Add A Recipe",
      recipes: [{ title: "", prep_time: "", servings: "", source_url: "" }],
      directions: [{ number: "", step: "" }],
      ingredients: [{ id: "", name: "", measurement_in_ml: "", number_of: "" }],
      images: [{ url: "" }],
      ingredientsFromDb: [],
    };
  },
  created: function () {
    axios.get("/api/ingredients").then((response) => {
      console.log(response.data);
      this.ingredientsFromDb = response.data;
    });
  },
  methods: {
    createRecipe: function () {
      console.log("creating recipe....");

      var params = {
        recipes: this.recipes,
        directions: this.directions,
        ingredients: this.ingredients,
        images: this.images,
        // ingredient_recipes?????????????????
      };

      axios.post("/api/recipes", params).then((response) => {
        console.log(response.data);
      });
    },
    addRecipe: function () {
      console.log("adding recipe...");
      // this.recipes.push({ title: "", prep_time: "", servings: "", source_url: "" }); DELETED THIS LINE AND CODE SAVED TO THE DB.
    },
    addDirection: function () {
      console.log("adding direction...");
      this.directions.push({ number: "", step: "" });
    },
    addIngredient: function () {
      console.log("adding ingredient...");
      this.ingredients.push({ name: "" });
    },
    addImage: function () {
      console.log("adding image...");
      this.images.push({ url: "" });
    },
  },
};
</script>