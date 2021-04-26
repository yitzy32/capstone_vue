<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <button v-on:click="getRecipes()">recipes</button>
    <div v-for="recipe in recipes">{{ recipe.title }}</div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "All Recipes",
      recipes: [],
    };
  },
  created: function () {
    this.getRecipes();
  },
  methods: {
    getRecipes: function () {
      console.log("getting recipe");
      axios.get("/api/recipes").then((response) => {
        console.log(response.data);
        this.recipes = response.data;
      });
    },
  },
};
</script>