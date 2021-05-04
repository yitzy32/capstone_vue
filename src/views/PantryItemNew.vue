<template>
  <div class="pantry-item-new">
    <h1>{{ message }}</h1>

    <form v-on:submit.prevent="newIngredient()" class="centered-text">
      <span class="pantry-item-fade"><label for="">Ingredient Name</label></span>
      <input type="text" v-model="newIngredientName" class="centered-text">
      <input type="submit" value="ADD INGREDIENT NAME" class="button primary fit">
    </form>
    <div v-show="hasAddedName">
      <form v-on:submit.prevent="newPantryItem()" class="centered-text">
        <small v-for="error in errors">
          {{ error }}
        </small>
        <!-- <p> name: <p v-model="newIngredientName"></p></p> -->
        <p> How Many Milliliters: <input type="text" v-model="newMeasurementInMl"></p>
        <p> Or Number Of: <small>(like for eggs or apples..)</small> <input type="text" v-model="newNumberOf"></p>
        <p><input type="submit" value="ADD THIS TO YOUR PANTRY" class="button primary large fit"> <br/><br/></p>
      </form>
    </div>
  </div>
  <!-- <p> How Many Milliliters: <input v-bind:disabled="isDisabled" type="text" v-model="newMeasurementInMl"></p>
  <p> Or Number Of: <small>(like for eggs or apples..)</small> <input v-bind:disabled="!isDisabled" type="text" v-model="newNumberOf"></p> -->
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "NEW PANTRY ITEM",
      newIngredientName: "",
      newIngredientId: "",
      newMeasurementInMl: "",
      newNumberOf: "",
      hasAddedName: false,
      errors: [],
      isDisabled: false,
    };
  },
  created: function () {
    console.log("connected successfulllllyyyyy!");
  },
  methods: {
    newIngredient: function () {
      console.log("adding ingredient");

      var params = {
        name: this.newIngredientName,
      };
      axios.post("/api/ingredients", params).then((response) => {
        console.log(response.data);
        console.log(response.data.id);
        this.newIngredientId = response.data.id;
        this.hasAddedName = !this.hasAddedName;
      });
    },

    newPantryItem: function () {
      console.log("in new pantry item");

      var params = {
        ingredient_id: this.newIngredientId,
        measurement_in_ml: this.newMeasurementInMl,
        number_of: this.newNumberOf,
        name: this.newName,
      };
      axios
        .post("/api/pantry_items", params)
        .then((response) => {
          console.log("pantry_items create", response.data);
          this.$router.push("/pantry_items");
        })
        .catch((error) => {
          console.log("pantry_item create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

// save ingredient in db
