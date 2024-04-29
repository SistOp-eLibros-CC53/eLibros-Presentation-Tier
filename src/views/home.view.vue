<script>

export default {
  name: "home",
  data() {
    return {
      myCart: [],
      drawer: false,
      items: [
        { label: "Home", to: `/home/${'xd'}` },
        { label: "My Cart", to: `/home/${'xd'}/my_cart` },
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
      <pv-button
          class="p-button-text text-white"
          icon="pi pi-bars"
          @click="drawer = !drawer"
      ></pv-button>
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
        <i v-badge="2" class="pi pi-bell" style="font-size: 2rem" />
      </div>
    </template>
  </pv-toolbar>
  </header>
  <pv-sidebar v-model:visible="drawer"> </pv-sidebar>
  <RouterView
      myCart:="myCart"
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