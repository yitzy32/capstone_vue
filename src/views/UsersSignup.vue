<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <form v-on:submit.prevent="userSignUp()">
      <p>name <input type="text" v-model="name"></p>
      <p>email <input type="text" v-model="email"></p>
      <p>password <input type="password" v-model="password"></p>
      <p>password confirmation <input type="password" v-model="passwordConfirmation"></p>
      <p>Sign up<input type="submit"></p>
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
      message: "SIGN UP",
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: [],
    };
  },
  created: function () {
    console.log("in users signup");
  },
  methods: {
    userSignUp: function () {
      console.log("succesfully signed up");
      var params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
      };
      axios
        .post("api/users", params)
        .then((response) => {
          console.log("babam!", response);
          this.$router.push("/pantry_items");
        })
        .catch((error) => {
          console.log("sign up error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>