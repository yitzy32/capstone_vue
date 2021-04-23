<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <form v-on:submit.prevent="newPantryItem()">
      <small v-for="error in errors">
        {{ error }}
      </small>
      <p> name: <input type="text" v-model="newName"></p>
      <p> ingredient id: <input type="text" v-model="newIngredientId"></p>
      <p> measurement in ml: <input type="text" v-model="newMeasurementInMl"></p>
      <p> user id: <input type="text" v-model="newUserId"></p>
      <p> number of: <input type="text" v-model="newNumberOf"></p>
      <p><input type="submit"> <br/><br/>ADD ITEM</p>
    </form>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "NEW PANTRY ITEM",
      newIngredientId: "",
      newMeasurementInMl: "",
      newUserId: "",
      newNumberOf: "",
      newName: "",
      errors: [],
    };
  },
  created: function () {
    console.log("connected successfulllllyyyyy!");
  },
  methods: {
    newPantryItem: function () {
      console.log("in new pantry item");
      var params = {
        ingredient_id: this.newIngredientId,
        measurement_in_ml: this.newMeasurementInMl,
        user_id: this.newUserId,
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