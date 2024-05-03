<script>
import {UsersApiService} from "../../shared/services/usersApi.service.js";

export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      agentsApi: new UsersApiService(),
    }
  },
  methods: {
    // Proof user's existence
    confirmUser() {
      this.agentsApi.getByUsernameAndPassword(this.username, this.password)
          .then((response) => {
            console.log(response.data)
            console.log(this.username)
            console.log(this.password)
            if (response.data.length != 0) {
              this.$router.push(`/home/${response.data[0].id}`);
            }
          });
    }
  }
}
</script>

<template>
  <div class="flex">
    <div class="col-6 h-screen flex align-items-center justify-content-center">
      <div class="p-fluid">
        <div class="field">
          <label for="username">Username</label>
          <pv-input-text v-model="username" id="username" type="text" />
        </div>
        <div class="field">
          <label for="password">Password</label>
          <pv-input-text v-model="password" id="password" type="password" />
        </div>

        <pv-button label="Login" class="mt-2" @click="confirmUser"></pv-button>
        <a href="http://191.239.120.67:8000" target="_blank"><pv-button severity="warning" label="Sign-Up" class="mt-2"></pv-button></a>

      </div>
    </div>

    <div class="container2 col-6 h-screen align-items-center justify-content-center bg-gray-900 text-white">
      <img width="400" src="../../assets/images/logo2.png" alt="eLibros">
    </div>
  </div>
</template>

<style>
.container2 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* or any other height you want */
}
</style>