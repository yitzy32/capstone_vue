<template>
  <div class="pantry-items-index">
    <h1>{{ message }}</h1>
    <a href="/pantry_items/new"><button>Add An Item To Your Pantry</button></a> <br><hr><br> 
      <div v-for="pantryItem in pantryItems">
        <div>You Have: <b>{{ pantryItem.measurement_in_ml }}</b> Milliliters of <b>{{ pantryItem.name }}</b></div>
        <br>
        You Have {{ pantryItem.number_of }} {{ pantryItem.name }} 
        <hr>
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
      message: "Welcome! These Are The Items In Your Pantry",
      pantryItems: [],
    };
  },
  mounted: function () {
    console.log("in created");
    this.pantryItemsIndex();
  },
  methods: {
    pantryItemsIndex: function () {
      console.log("in Pantry Items Index");
      axios.get("/api/pantry_items").then((response) => {
        console.log(response.data);
        this.pantryItems = response.data;
      });
    },
  },
};
</script>