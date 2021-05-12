<template>
  <div class="recipes-search">
    <h1>{{ message }}</h1>
    <input type="text" v-model="search"> <br>
    <button v-on:click="searchForRecipes()">Search</button> <br>
    <div class="center">
      <div class="box alt ">
        <div class="row gtr-uniform">
          <div class="col-4 recipe-box" v-for="recipe in recipes">
            <span class="image fit">
              {{ recipe.title }}
              <img v-bind:src="recipe.image">
              <button class="centered-text" v-on:click="addRecipe()" disabled>Add</button>
            </span>
          </div>
        </div>
      </div>
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
      message: "Search for recipes",
      recipes: [],
      search: "",
    };
  },
  created: function () {},
  methods: {
    searchForRecipes: function () {
      console.log("searching for recipes...");
      var params = {
        search: this.search,
      };
      axios.get(`/api/api_searches?search=${this.search}`).then((response) => {
        console.log(response.data);
        this.recipes = response.data;
        console.log(params.search);
      });
    },
    addRecipe: function () {
      console.log("adding recipe....");
    },
  },
};
</script>