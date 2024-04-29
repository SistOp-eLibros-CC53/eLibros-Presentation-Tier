<script>

export default {
  name: "app",
  data() {
    return {
      myCart: [],
    };
  }
};

</script>

<template>
  <pv-toast />
  <RouterView
    myCart:="myCart"
  />
</template>

<style scoped>

</style>
