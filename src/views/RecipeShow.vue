<template>
  <div class="home">
    <h1>{{ message }}</h1>
    Title: {{ recipe.title }} <br>
    Prep time: {{ recipe.prep_time }} <br>
    Srevings: {{ recipe.servings }} <br>
    
    <!-- <div v-for="ingredient in ingredients"></div>
    {{ ingredient.name }} -->
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Showing one recipe",
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
  },
};
</script>