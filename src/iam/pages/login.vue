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
      </div>
    </div>

    <div class="col-6 h-screen align-items-center justify-content-center bg-gray-900 text-white">
    </div>
  </div>
</template>

<style scoped>

</style>