export const cartModule = {
  namespaced: true,
  state() {
    return {
      items: [],
      total: 0,
      qty: 0,
    };
  },
  mutations: {
    addProductToCart(state, payload) {
      const productInCartIndex = state.items.findIndex(
        (ci) => ci.productId === payload.id
      );

      if (productInCartIndex >= 0) {
        state.items[productInCartIndex].qty++;
      } else {
        const newItem = {
          productId: payload.id,
          title: payload.title,
          image: payload.image,
          price: payload.price,
          qty: 1,
        };
        state.items.push(newItem);
      }
      state.qty++;
      state.total += payload.price;
    },
    removeProductFromCart(state, payload) {
      const productInCartIndex = state.items.findIndex(
        (cartItem) => cartItem.productId === payload.prodId
      );
      if (productInCartIndex >= 0) {
        const prodData = state.items[productInCartIndex];

        if (prodData.qty > 1) {
          // Decrease quantity
          prodData.qty--;
          state.qty--;
          state.total -= prodData.price;
        } else {
          // Remove product from cart if quantity is 1
          state.items.splice(productInCartIndex, 1);
          state.qty--;
          state.total -= prodData.price;
        }

        if (state.total < 0) {
          state.total = 0;
        }
      }
    },
  },
  actions: {
    addToCart(context, payload) {
      const prodId = payload.id;
      const products = context.rootGetters['products/products'];
      const product = products.find((prod) => prod.id === prodId);
      context.commit('addProductToCart', product);
    },
    removeFromCart(context, payload) {
      context.commit('removeProductFromCart', payload);
    },
  },
  getters: {
    products(state) {
      return state.items;
    },
    totalSum(state) {
      return state.total.toFixed(2);
    },
    quantity(state) {
      return state.items.length;
    },
  },
};
