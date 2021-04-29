<template>
  <div class="recipe-show">
    <h1>{{ message }}</h1>
    Title: {{ recipe.title }} <br>
    Total Prep Time: {{ recipe.prep_time }} <br>
    Srevings: {{ recipe.servings }} <br><br>
    <!-- {{recipe}} -->
    <h2>Ingredients:</h2>
    <section class="flex-container">
      <div v-for="ingredient in recipe.ingredients">
        {{ ingredient.name }}
      </div>
      <div v-for="measurement in recipe.measurements">
        {{ measurement.measurement_in_ml }} Milliliters
      </div>
    </section> <br><br>
    <h2>Directions:</h2>
    <div v-for="direction in recipe.directions">
      {{ direction.step }}
    </div>
    <div v-for="image in recipe.images">
      <img v-bind:src="image.url">
    </div>
    <button v-on:click="makeRecipe()">Make This Recipe</button>
    <br><br>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Here Is More Info On The Recipe",
      recipe: {},
    };
  },
  created: function () {
    this.showRecipe();
  },
  methods: {
    showRecipe: function () {
      console.log("showing one recipe");
      axios.get("/api/recipes/" + this.$route.params.id).then((response) => {
        console.log(response.data);
        this.recipe = response.data;
      });
    },
    makeRecipe: function () {
      console.log("making recipe. subtracting items...");
      axios.patch("/api/recipes/" + this.$route.params.id).then((response) => {
        console.log(response.data);
        this.$router.push("/pantry_items");
      });
    },
  },
};
</script>