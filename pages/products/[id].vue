<template>
  <div>
    <Head>
      <Title>My Product | {{ product.title }}</Title>
    </Head>
    <h2>Product Detail for {{ id }}</h2>
    <p v-if="pending">Loading...</p>
    <p v-if="error">Error: {{ error.message }}</p>
    <p>{{ product.title }}</p>
    <p>{{ product.price }}</p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;

// Fetch the product
//const { data: product } = await useFetch(uri);

const {
  data: product,
  pending,
  error,
} = useAsyncData("products", () => $fetch(uri));

// Error handeling - passing message on 404 custom page
if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product Not Found",
    fatal: true,
  });
}
</script>

<style lang="scss" scoped></style>
