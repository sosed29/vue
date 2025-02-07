export default {
  addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (!cart.some(item => item.id === product.id)) {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  },
  getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
  },
  isInCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    return cart.some(item => item.id === productId);
  }
};
