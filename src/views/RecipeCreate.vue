<template>
  <div class="recipe-create">
    <h1>{{ message }}</h1>
    <p>
      <label for="" class="centered-text">Title:</label> <input class="centered-text" type="text" v-model="recipes[recipes.length - 1].title">
    </p>
    <p>
      <label for="" class="centered-text">Total Prep Time:</label> <input class="centered-text" type="text" v-model="recipes[recipes.length - 1].prep_time">
    </p>
    <p>
      <label for="" class="centered-text">Servings:</label> <input class="centered-text" type="text" v-model="recipes[recipes.length - 1].servings">
    </p>
    <!-- <p>
      user_id: <input class="centered-text" type="text">
    </p> -->
    <p>
      <label for="" class="centered-text">Source Url:</label> <input class="centered-text" type="text" v-model="recipes[recipes.length - 1].source_url">
    </p>
    <button v-on:click="addRecipe()" class="button primary fit">Add This Info</button>
    <br><br>  
    <button v-on:click="toDirectionsNext" class="button primary fit">Next Step</button>
      
    <div v-show="isRecipeAdded">
      <p>
        <label for="" class="centered-text">Direction Number:</label> <input class="centered-text" type="text" v-model="directions[directions.length - 1].number">
      </p>
      <p>
        <label for="" class="centered-text">Direction Instruction:</label> <input class="centered-text" type="text" v-model="directions[directions.length - 1].step">
      </p>
      <button v-on:click="addDirection()" class="button primary fit">Add This Direction</button>
      <div v-for="direction in directions">
      <!-- {{ direction.number }}{{ direction.step }} -->
      </div>
      <br><br>
      <button v-on:click="toIngredientsNext" class="button primary fit">Next Step</button>
      <div v-show="isDirectionAdded">
        <p>
        <label for="" class="centered-text">Ingredient Name:</label>
        <select id="" v-model="ingredients[ingredients.length -1].name">
          <option v-for="ingredientFromDb in ingredientsFromDb" v-bind:value="ingredientFromDb.name">
            {{ ingredientFromDb.name }}
          </option>
        </select>
        
        <label for="" class="centered-text">How Many Milliliters:</label> 
        <input class="centered-text" type="text" v-model="ingredients[ingredients.length - 1].measurement_in_ml">
        <!-- <label class="centered-text">Or Number Of: <small>(like eggs, apples..)</small></label> <input class="centered-text" type="text" v-model="ingredients[ingredients.length - 1].number_of"> -->
        </p>
        <button v-on:click="addIngredient()" class="button primary fit">add ingredient</button>
          <div v-for="ingredient in ingredients">
          <!-- {{ ingredient.name }} {{ ingredient.measurement_in_ml }} {{ ingredient.number_of }} -->
          </div>
          <br><br>
          <button v-on:click="toImagesNext" class="button primary fit">Next Step</button>
        <div v-show="isIngredientAdded">
          <p>
            <label for="" class="centered-text">Image Url:</label> <input class="centered-text" type="text" v-model="images[images.length - 1].url">
            <button v-on:click="addImage()" class="button primary fit">add image</button>
          </p>
          <div v-show="isImageAdded">
            <p>
              <button v-on:click="createRecipe()" class="button primary fit large" >ADD THIS RECIPE</button>
            </p>
            <div v-for="image in images">
              <!-- {{ image.url }} -->
            </div>
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
      message: "Add A Recipe",
      recipes: [{ title: "", prep_time: "", servings: "", source_url: "" }],
      directions: [{ number: "", step: "" }],
      ingredients: [{ name: "", measurement_in_ml: "", number_of: "" }],
      images: [{ url: "" }],
      ingredientsFromDb: [],
      isRecipeAdded: false,
      isDirectionAdded: false,
      isIngredientAdded: false,
      isImageAdded: false,
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
      console.log("this.ingredients");
      console.log(this.ingredients);
      console.log("this.ingredients");
      console.log(this.ingredients.pop());
      axios.post("/api/recipes", params).then((response) => {
        console.log(response.data);
      });
      this.$router.push("/recipes");
    },
    addRecipe: function () {
      console.log("adding recipe...");
    },
    toDirectionsNext: function () {
      this.isRecipeAdded = !this.isRecipeAdded;
    },
    addDirection: function () {
      console.log("adding direction...");
      this.directions.push({ number: "", step: "" });
    },
    toIngredientsNext: function () {
      this.isDirectionAdded = !this.isDirectionAdded;
    },
    addIngredient: function () {
      console.log("adding ingredient...");
      this.ingredients.push({ name: "", measurement_in_ml: "", number_of: "" });
    },
    toImagesNext: function () {
      this.isIngredientAdded = !this.isIngredientAdded;
    },
    addImage: function () {
      console.log("adding image...");
      this.images.push({ url: "" });
      this.isImageAdded = !this.isImageAdded;
    },
  },
};
</script>