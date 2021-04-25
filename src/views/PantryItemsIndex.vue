<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <a href="/pantry_items/new"><button>Add An Item To Your Pantry</button></a> <br><hr><br> 
      <div v-for="pantryItem in pantryItems">
        <b>Name:</b> {{ pantryItem.name }} <br>
        <b>Measurement In Ml:</b> {{ pantryItem.measurement_in_ml }}
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
      message: "Welcome to Pantry Item Index",
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