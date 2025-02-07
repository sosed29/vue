вленный код для вашего компонента ProductCard.vue
<template>
  <div class="card" :class="{ 'card--sold': product.sold }">
    <img :src="product.image" :alt="product.title" class="card__image" @click="openModal" />
    <h3 class="card__title" @click="openModal">{{ product.title }}</h3>
    <p class="card__author">{{ product.author }}</p>
    
    <div v-if="!product.sold" class="card__pricing">
      <div class="card__prices">
        <span v-if="product.oldPrice" class="card__old-price">{{ product.oldPrice }} $</span>
        <span class="card__price">{{ product.price }} $</span>
      </div>
      <button @click="buyProduct" :class="buttonClass" :disabled="status === 'inCart'">
        <span v-if="status === 'inCart'" class="cart-icon">
          <img src="/img/Vector.svg" alt="ок" />
        </span>
        {{ buttonText }}
      </button>
    </div>

    <p v-else class="card__sold-text">Продана на аукционе</p>
  </div>
</template>

<script>
export default {
  props: {
    product: Object
  },
  data() {
    return {
      status: this.isInCart() ? "inCart" : "default"
    };
  },
  computed: {
    buttonText() {
      return this.status === "processing" ? "обрабатывается" :
             this.status === "inCart" ? "В корзине" : "Купить";
    },
    buttonClass() {
      return {
        "card__button": true,
        "card__button--processing": this.status === "processing",
        "card__button--in-cart": this.status === "inCart"
      };
    }
  },
  methods: {
    buyProduct() {
      if (this.status === "default") {
        this.status = "processing";
        setTimeout(() => {
          this.addToCart(this.product);
          this.status = "inCart";
        }, 2000);
      }
    },
    openModal() {
      this.$emit("open-modal", this.product);
    },
    addToCart(product) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      if (!cart.some(item => item.id === product.id)) {
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    },
    isInCart() {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      return cart.some(item => item.id === this.product.id);
    }
  }
};
</script>

  
  
  <style scoped>
  .card {
    width: 280px;
    height: 328px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .card__image {
    width: 100%;
    height: 150px;
    cursor: pointer;
  }
  
  .card__title {
    font-family: Merriweather;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    margin: 0;
    margin-top: 12px;
  }
  
  .card__author {
    font-family: Merriweather;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    margin: 0;
    margin-bottom: 22px;
  }
  
  .card__pricing {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 24px;
  }
  
  .card__prices {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .card__price {
    font-size: 18px;
    font-weight: bold;
  }
  
  .card__old-price {
    text-decoration: line-through;
    color: rgba(160, 160, 160, 1);
    font-size: 14px;
  }

  
  .card__button {
    width: 112px;
    height: 48px;
    padding: 6px 10px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    background: #3e2723;
    color: white;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  .card__button:hover {
    background: rgba(119, 103, 99, 1);

  }


  .card__button--processing {
    background: rgba(193, 180, 177, 1);
  }
  
  .card__button--in-cart {
    background: rgba(91, 58, 50, 1);
  }
  
  .cart-icon img {
    width: 16px;
    height: 16px;
  }
  
  .card--sold {
    opacity: 0.5;
  }
  
  .card__sold-text {
    font-size: 16px;
    font-weight: bold;
    color: rgba(52, 48, 48, 1);
  }
  </style>