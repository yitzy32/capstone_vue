<template>
  <div class="login">
    <form v-on:submit.prevent="submit()">
      <h1>Login</h1>
        <small class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </small>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" class="form-control centered-text" v-model="email">
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" class="form-control centered-text" v-model="password">
        <br>
      <input type="submit" class="btn btn-primary" value="Submit">
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    submit: function () {
      var params = {
        email: this.email,
        password: this.password,
      };
      axios
        .post("/api/sessions", params)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          this.$router.push("/pantry_items");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>

