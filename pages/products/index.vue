<template>
  <h2>Main Product Page</h2>
  <div v-if="!pending && !error" class="d-flex flex-wrap gap-4">
    <div v-for="prod in products" class="product-box">
      <productCard :product="prod" />
    </div>
  </div>
  <p v-if="pending">Loading...</p>
  <p v-if="error">Error: {{ error.message }}</p>
</template>

<script setup>
// fetch the products
// const { data: products } = await useFetch("https://fakestoreapi.com/products");
const {
  data: products,
  pending,
  error,
} = useAsyncData("products", () => $fetch("https://fakestoreapi.com/products"));
//= useAsyncData("products", () => $fetch("http://localhost:3300/list-records"));

// Adding custom meta - override the one we have in config
useHead({
  title: "My Products",
  meta: [{ name: "Description", content: "My custom product list" }],
});
</script>

<style lang="scss" scoped></style>
