<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p>
      title: <input type="text" v-model="recipes[recipes.length - 1].title">
    </p>
    <p>
      prep_time: <input type="text" v-model="recipes[recipes.length - 1].prep_time">
    </p>
    <p>
      servings: <input type="text" v-model="recipes[recipes.length - 1].servings">
    </p>
    <!-- <p>
      user_id: <input type="text">
    </p> -->
    <p>
      source_url: <input type="text" v-model="recipes[recipes.length - 1].source_url">
    </p>

    <button v-on:click="addRecipe()">add recipe</button>
    <div v-for="recipe in recipes">
      {{ recipe.title }}{{ recipe.prep_time }}{{ recipe.servings }}{{ recipe.source_url }}
    </div>
    <p>
      direction number: <input type="text" v-model="directions[directions.length - 1].number">
    </p>
    <p>
      direction step: <input type="text" v-model="directions[directions.length - 1].step">
    </p>
    <button v-on:click="addDirection()">Add direction</button>
    <div v-for="direction in directions">
    {{ direction.number }}{{ direction.step }}
    </div>

    <p>
      Ingredient Name:
      <select id="" v-model="ingredients[ingredients.length -1].name">
        <option v-for="ingredientFromDb in ingredientsFromDb" v-bind:value="ingredientFromDb.name">
          {{ ingredientFromDb.name }}
        </option>
      </select>
      
      Measurement In Ml: <input type="text" v-model="ingredients[ingredients.length - 1].measurement_in_ml">
      Number Of: <input type="text" v-model="ingredients[ingredients.length - 1].number_of">
    </p>
    <button v-on:click="addIngredient()">add ingredient</button>
      <div v-for="ingredient in ingredients">
      {{ ingredient.name }} {{ ingredient.measurement_in_ml }} {{ ingredient.number_of }}
      </div>
    <p>
      image url: <input type="text" v-model="images[images.length - 1].url">
      <button v-on:click="addImage()">add image</button>
    </p>
    <p>
      add your recipe: <button v-on:click="createRecipe()">ADD</button>
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