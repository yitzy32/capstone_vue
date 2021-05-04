<template>
  <div class="recipe-index">
    <h1>{{ message }}</h1>
    <div v-for="recipe in recipes" class="text-background">
      
      <router-link v-bind:to="`/recipes/${recipe.id}`">
        <span class="recipe-show-link">{{ recipe.title }}</span> 
      </router-link>
    </div> <br><br><br><br><br><br><br><br>
    <a href="/recipes/new"><button class="button primary"> Add New Recipe</button></a>
    <a href="/recipes/search"><button class="button primary" v-on:click="searchForRecipes()">search for recipes</button></a>
  </div>
</template>

<style>
</style>
<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "All Your Recipes",
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