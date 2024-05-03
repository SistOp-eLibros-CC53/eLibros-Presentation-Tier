<script>
import {OrdersApiService} from "../services/orders-api.service.js";

export default {
  name: "payment.component",
  props: ['myCart'],
  data() {
    return {
      myCart_local: this.$props.myCart,
      ordersApi: new OrdersApiService(),
    };
  },
  created() {

  },
  methods: {
    paying() {
      let totalPrice = 0;
      this.myCart_local.forEach(
          (book) => totalPrice += book.price
      );
      let date = new Date();
      let order = {
        user_id: this.$route.params.id,
        book_ids: this.$props.myCart,
        total_price: totalPrice,
        date_transaction: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
      };
      this.ordersApi.create(order);
      console.log('Done');
      while(this.myCart_local.length != 0) {
        this.myCart_local.splice(0, 1);
      }
    }
  }
}
</script>

<template>
  <h5>Pay Now</h5>
  <div class="col-3">

  </div>
  <div class="col-3 card p-fluid">
    <div class="field">
      <label for="name1">Nombre</label>
      <pv-input-text id="name1" type="text"/>
    </div>
    <div class="field">
      <label for="email1">Número de Tarjeta</label>
      <pv-input-text id="email1" type="text" />
    </div>
    <div class="field">
      <label for="age1">MM/AA</label>
      <pv-input-text id="age1" type="text" />
    </div>
    <div class="field">
      <label for="age1">CVV</label>
      <pv-input-text id="age1" type="text" />
    </div>
    <div class="field">
      <label for="age1">Titular de la tarjeta</label>
      <pv-input-text id="age1" type="text" />
    </div>
    <div class="field">
      <label for="age1">DNI</label>
      <pv-input-text id="age1" type="text" />
    </div>
  </div>
  <div class="col-3">

  </div>
  <router-link
    :to="`/success/${this.$route.params.id}`"
  >
    <pv-button class="mb-2" label="Pay" severity="success" @click="paying"></pv-button>
  </router-link>
</template>

<style scoped>

</style>