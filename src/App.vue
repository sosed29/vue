<template>
  <Header @update:searchQuery="searchQuery = $event" />
  <div class="container">
    <ProductList :searchQuery="searchQuery" />
  </div>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import ProductList from "@/components/ProductList.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    ProductList,
    Footer
  },
  data() {
    return {
      searchQuery: ''
    };
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: rgba(246, 243, 243, 1);
}
</style>
