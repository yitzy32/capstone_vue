<template>
  <div class="signup">
    <h1>Signup</h1>
      <form v-on:submit.prevent="submit()">
        <div class="fields">
          <div class="field whole">
            <input class="centered-text" type="text" name="name" id="name" placeholder="Name" v-model="name"/>
          </div>
          <div class="field whole">
            <input class="centered-text" type="email" name="email" id="email" placeholder="Email" v-model="email"/>
          </div>
          <div class="field whole">
            <input class="centered-text" type="password" name="password" id="password" placeholder="Password" v-model="password"/>
          </div>
          <div class="field whole">
            <input class="centered-text" type="password" name="password" id="password-confirmation" placeholder="Password Confirmation" v-model="passwordConfirmation"/>
            <small v-if="password.length >= 6 && password.length <= 20">You have {{ 20 - password.length }} remaining characters in your password</small>
          </div>
          
        </div>
        <ul class="actions" id="signup-page-button">
          <li><input type="submit" value="Signup" class="centered-text primary" /></li>
        </ul>
      </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: [],
    };
  },
  methods: {
    submit: function () {
      var params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
      };
      axios
        .post("/api/users", params)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>