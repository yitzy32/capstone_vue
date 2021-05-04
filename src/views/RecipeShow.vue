<template>
  <div class="recipe-show">
    <h1>{{ message }}</h1>
      <b>Title:</b> {{ recipe.title }} <br>
      <b>Total Prep Time:</b> {{ recipe.prep_time }} <br>
      <b>Srevings:</b> {{ recipe.servings }} <br><br>
    
    <!-- {{recipe}} -->
    <h2>Ingredients:</h2>

    
      <div v-for="ingredient in recipe.measurements"> 
        {{ ingredient.measurement_in_ml }} Milliliters of: <b>{{ ingredient.name  }}</b> 
      </div>
    <br><br>
    <h2>Directions:</h2>
    <div v-for="direction in recipe.directions">
      <b>{{ direction.number }}.</b><br>
      {{ direction.step }}
      <br><br>
    </div>
    <div v-for="image in recipe.images">
      <img v-bind:src="image.url">
    </div>
    <button class="button primary fit large" v-on:click="makeRecipe()">Make This Recipe</button>
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