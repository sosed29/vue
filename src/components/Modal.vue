<template>
  <div v-if="show" class="modal" @click.self="closeModal">
    <div class="modal__content">
      <button class="modal__close" @click="closeModal">×</button>
      <img :src="product.image" :alt="product.title" class="modal__image" />
      <h3 class="modal__title">{{ product.title }}</h3>
      <p class="modal__author">{{ product.author }}</p>
      <p class="modal__description">{{ product.description }}</p>
      <div class="modal__pricing">
        <span v-if="product.price" class="modal__price">{{ product.price }} $</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
    product: Object
  },
  methods: {
    closeModal() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal__content {
  background: white;
  padding: 20px;
  width: 400px;
  text-align: center;
  border-radius: 8px;
  position: relative;
}

.modal__close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.modal__image {
  width: 100%;
  height: auto;
}

.modal__title {
  font-size: 18px;
  font-weight: bold;
}

.modal__description {
  font-size: 14px;
  color: gray;
}

.modal__pricing {
  margin-top: 10px;
}

.modal__price {
  font-size: 18px;
  font-weight: bold;
}
</style>


<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal__content {
  background: white;
  padding: 20px;
  width: 400px;
  text-align: center;
  border-radius: 8px;
  position: relative;
}

.modal__close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.modal__image {
  width: 100%;
  height: auto;
}

.modal__title {
  font-size: 18px;
  font-weight: bold;
}

.modal__description {
  font-size: 14px;
  color: gray;
}

.modal__pricing {
  margin-top: 10px;
}

.modal__price {
  font-size: 18px;
  font-weight: bold;
}
</style>
