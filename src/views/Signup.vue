<template>
  <div class="signup">
    <h1>Signup</h1>
      <form v-on:submit.prevent="submit()">
        <div class="fields">
          <div class="field whole">
            <input type="text" name="name" id="name" placeholder="Name" v-model="name"/>
          </div>
          <div class="field whole">
            <input type="email" name="email" id="email" placeholder="Email" v-model="email"/>
          </div>
          <div class="field whole">
            <input type="password" name="password" id="password" placeholder="Password" v-model="password"/>
          </div>
          <div class="field whole">
            <input type="password" name="password" id="password-confirmation" placeholder="Password Confirmation" v-model="passwordConfirmation"/>
          </div>
          
        </div>
        <ul class="actions">
          <li><input type="submit" value="Signup" class="primary" /></li>
        </ul>
      </form>
    
    
    
    
    
    <!-- <form v-on:submit.prevent="submit()">
      <h1>Signup</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>Name:</label> 
        <input type="text" class="form-control" v-model="name">
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" class="form-control" v-model="email">
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" class="form-control" v-model="password">
      </div>
      <div class="form-group">
        <label>Password confirmation:</label>
        <input type="password" class="form-control" v-model="passwordConfirmation">
      </div>
      <input type="submit" class="btn btn-primary" value="Submit">
    </form> -->
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