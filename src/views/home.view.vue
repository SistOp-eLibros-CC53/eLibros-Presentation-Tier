<script>

export default {
  name: "home",
  props: ['id'],
  data() {
    return {
      myCart: [],
      drawer: false,
      items: [
        { label: "Log-Out", to: '/' },
        { label: "Home", to: `/home/${this.$route.params.id}` },
        { label: "My Cart", to: `/my_cart/${this.$route.params.id}` },
      ],
    };
  },
}
</script>

<template>
  <pv-toast />
  <header>
  <pv-toolbar class="bg-primary">
    <template #start>
      <h3>eLibros</h3>
    </template>
    <template #end>
      <div class="flex-column">
        <router-link
            v-for="item in items"
            :to="item.to"
            custom
            v-slot="{navigate, href}"
            :key="item.label"
        >
          <pv-button
              class="p-button-text text-white"
              :href="href"
              @click="navigate"
          >{{item.label}}</pv-button>
        </router-link>
        <pv-badge>{{this.myCart.length}}</pv-badge>
      </div>
    </template>
  </pv-toolbar>
  </header>
  <pv-sidebar v-model:visible="drawer"></pv-sidebar>
  <RouterView
      :myCart="myCart"
  />
  <footer>
    <pv-toolbar class="bg-primary">
      <template #start>
        <h3>&copy; eLibros Co.</h3>
      </template>
    </pv-toolbar>
  </footer>
</template>

<style scoped>

</style>