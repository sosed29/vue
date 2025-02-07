<template>
  <div class="product-list">
    <h2>Картины эпохи Возрождения</h2>
    <div class="product-grid">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
        @open-modal="openModal"
      />
    </div>
    <Modal 
      v-if="isModalOpen && selectedProduct" 
      :show="isModalOpen" 
      :product="selectedProduct" 
      @close="closeModal" 
    />
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import Modal from "./Modal.vue";

export default {
  components: {
    ProductCard,
    Modal
  },
  props: {
    searchQuery: {
      type: String,
      default: "" 
    }
  },
  data() {
    return {
      products: [
        { id: 1, title: "«Рождение Венеры»", author: "Сандро Боттичелли", description: "Известная картина эпохи Возрождения.", image: "/img/Mask Group.png", price: "1 000 000", oldPrice: "2 000 000" },
        { id: 2, title: "«Тайная вечеря»", author: "Леонардо да Винчи", description: "Фреска, изображающая последнюю трапезу Христа.", image: "/img/vin.png", price: "3 000 000" },
        { id: 3, title: "«Сотворение Адама»", author: "Микеланджело", description: "Фрагмент росписи Сикстинской капеллы.", image: "/img/adam.png", price: "5 000 000", oldPrice: "6 000 000" },
        { id: 4, title: "«Урок анатомии»", author: "Рембрандт", description: "Изображение анатомического сеанса.", image: "/img/ram.png", sold: true }
      ],
      isModalOpen: false,
      selectedProduct: null
    };
  },
  computed: {
    filteredProducts() {
      if (!Array.isArray(this.products)) return []; // Проверка на массив
      const query = this.searchQuery ? this.searchQuery.toLowerCase() : ""; // Предотвращение ошибок с `undefined`
      
      return this.products.filter(product => 
        product.title && product.title.toLowerCase().includes(query) // Проверка наличия `title`
      );
    }
  },
  methods: {
    openModal(product) {
      this.selectedProduct = product;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.selectedProduct = null;
    }
  }
};
</script>

<style scoped>
.product-list {
  padding: 20px;
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
@media (max-width: 912px) {
  .product-grid {
    justify-content: center;
  }
}
</style>
