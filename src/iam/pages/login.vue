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
  <div class="col-12">
    <div class="card">
      <div class="grid">
        <div class="col-6 flex align-items-center justify-content-center">
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

        <div class="col-6 align-items-center justify-content-center bg-gray-900 text-white">
          <p class="line-height-3 m-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>