<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <a href="/recipes/new"><button class="button primary fit"> Add New Recipe</button></a>
    <div v-for="recipe in recipes">
      {{ recipe.title }}
      <router-link v-bind:to="`/recipes/${recipe.id}`">{{ recipe.title }}</router-link>

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