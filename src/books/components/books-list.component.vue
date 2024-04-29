<script>
import {BooksApiService} from "../services/books-api.service.js";

export default {
  name: "books-list",
  data() {
    return {
      books: [],
      sectionDatapoints: [
        { name: "test", dp_name: "test" },
        { name: "test", dp_name: "test" }
      ],
      book: {},
      myCart_pasado: [],
      statuses: [
        {label: "Published", value: "published"},
        {label: "Unpublished", value: "unpublished"},
      ],
      booksApi: null,
    };
  },
  props: {
    myCart: Array,
  },
  created() {
    this.booksApi = new BooksApiService();
    this.getBooks();
    console.log(this.$route.params.id);
  },
  methods: {
    // Fetch books
    getBooks() {
      this.booksApi.getAll()
          .then(response => {
            this.books = response.data;
            console.log(response.data)
          })
          .catch(e => {
            this.errors.push(e);
          });
    },
    getDisplayableTutorial(book) {
      return book;
    },
    addBook(id) {
      this.myCart_pasado.push(id);
      console.log(this.myCart_pasado);
    }
  }
};
</script>

<template>

  <pv-badge :value="myCart_pasado.length"></pv-badge>
  <pv-badge :value="myCart"></pv-badge>
  <pv-data-view :value="this.books">
    <template #list="slotProps">
      <div class="grid grid-nogutter">
        <div v-for="item in slotProps.items" :key="item.id" class="col-12">
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
                  <pv-button icon="pi pi-heart" outlined></pv-button>
                  <pv-button icon="pi pi-shopping-cart" label="Buy Now" :disabled="item.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto md:flex-initial white-space-nowrap" @click="addBook(item.id)"></pv-button>
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