<script>
import {BooksApiService} from "../services/books-api.service.js";
import {useToast} from "primevue/usetoast";

export default {
  name: "myCart",
  props: ['myCart'],
  data() {
    return {
      myCart_local: this.$props.myCart,
      books_in_cart: this.myCart_local,
      statuses: [
        {label: "Published", value: "published"},
        {label: "Unpublished", value: "unpublished"},
      ],
      booksApi: null,
      toast: useToast(),
    };
  },
  created() {
    this.booksApi = new BooksApiService();
  },
  methods: {
    getDisplayableTutorial(book) {
      return book;
    },
    removeBook(id) {
      console.log(this.myCart_local);
      console.log(id);
      this.myCart_local.splice(id, 1);
      this.toast.add({ severity: 'error', summary: 'Book Removed', detail: 'Message Detail', life: 3000 });
    }
  }
};
</script>

<template>
  <pv-toast/>
  <router-link
    :to="`/payment/${this.$route.params.id}`"
  >
    <pv-button class="mt-2 " label="Pay Now" severity="info"></pv-button>
  </router-link>
  <pv-data-view :value="this.myCart_local">
    <template #list="slotProps">
      <div class="grid grid-nogutter">
        <div v-for="(item, index) in slotProps.items" :key="item.id" class="col-12">
          <div class="flex flex-column sm:flex-row sm:align-items-center p-4 gap-3" :class="{ 'border-top-1 surface-border': item.id !== 0 }">

            <div class="md:w-10rem relative">
              <img class="block xl:block mx-auto border-round w-full" :src="item.image" :alt="item.title" />
            </div>

            <div class="flex flex-column md:flex-row justify-content-between md:align-items-center flex-1 gap-4">
              <div class="flex flex-row md:flex-column justify-content-between align-items-start gap-2">
                <div>
                  <span class="font-medium text-secondary text-sm">{{ item.category }}</span>
                  <div class="text-lg font-medium text-900 mt-2">{{ item.title }}</div>
                </div>
                <div class="surface-100 p-1" style="border-radius: 30px">
                  <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                    <span class="text-900 font-medium text-sm">{{ item.rating }}</span>
                    <i class="pi pi-star-fill text-yellow-500"></i>
                  </div>
                </div>
              </div>
              <div class="flex flex-column md:align-items-end gap-5">
                <span class="text-xl font-semibold text-900">${{ item.price }}</span>
                <div class="flex flex-row-reverse md:flex-row gap-2">
                  <pv-button icon="pi pi-ban" label="Remove" severity="danger" @click="removeBook(index)"></pv-button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </template>
  </pv-data-view>
</template>

<style lang="scss" scoped>
.table-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 960px) {
    align-items: start;
  }
}

@media screen and (max-width: 960px) {
  ::v-deep(.p-toolbar) {
    flex-wrap: wrap;
    .p-button {
      margin-bottom: 0.25rem;
    }
  }
}
</style>