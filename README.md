# Shopping Cart Vue App

## Overview

Shopping Cart Vue App is a Vue.js application designed for building a shopping cart system. The project makes use of Vue Router for routing and Vuex for state management.

## Technologies Used

- Vue.js
- Vue Router
- Vuex

## Demo

[Explore Shopping Cart Vue App](https://shopping-cart-vuee.vercel.app/)

## Project Structure

- `src/`: Directory containing the source code.
  - `components/`: Contains reusable components of the application.
    - `cart/`: Components related to the shopping cart feature.
      - `UserCart.vue`: Component for displaying the user's shopping cart.
    - `nav/`: Contains the navigation bar component.
      - `TheHeader.vue`: Component for displaying the navigation header.
    - `products/`: Components related to the product feature.
      - `ProductItem.vue`: Component for displaying individual product details.
    - `ui/`: Contains UI-specific reusable components.
      - `BaseBadge.vue`: Custom badge component used across the app.
  - `pages/`: Vue pages for different routes.
    - `ProductsList.vue`: Page displaying a list of products.
    - `ShopAdmin.vue`: Admin page for managing the shop.
    - `UserCart.vue`: Page displaying the user's shopping cart.
  - `store/`: Vuex store configuration and modules.
    - `modules/`: Contains Vuex store modules.
      - `cart.js`: Vuex module for managing the cart state.
      - `products.js`: Vuex module for managing product-related state.
    - `index.js`: Main Vuex store configuration.
  - `App.vue`: Main application component.
  - `main.js`: Application entry point that initializes the Vue instance.
  - `router.js`: Vue Router configuration.

## Usage

### Home Page

Explore the main page to browse a list of products. Each product is displayed with essential details and can be added to the shopping cart.

### Product Page

Click on a product to view more information. You can add the product to your shopping cart from here.

### Shopping Cart

Manage the items you've added to the cart by visiting the shopping cart page:

- **View Items:** A list of items in the cart along with their details.
- **Update Quantity:** Modify the quantity of items in the cart.
- **Remove Items:** Remove items from the cart if necessary.
- **Total Price:** Displays the total price for the items currently in the cart.
