<template>
  <div class="home">
    <h1>{{ message }}</h1>
        <form v-on:submit.prevent="signIn()">
          <p>Email<input type="text" v-model="email"></p>
          <p>Password<input type="password" v-model="password"></p>
          <p><input type="submit" >Sign In</p>

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
      message: "Please Sign in",
      email: "",
      password: "",
    };
  },
  created: function () {
    console.log("hello from created sign in");
  },
  methods: {
    signIn: function () {
      console.log("in sign in funtion");
      var params = {
        email: this.email,
        password: this.password,
      };
      axios.post("/api/sessions", params).then((response) => {
        console.log(response.data);
      });
    },
  },
};
</script>