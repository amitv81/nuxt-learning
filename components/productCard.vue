<template>
  <div class="">
    <h4>{{ product.title }}</h4>
    <img :src="product.image" alt="" />
    <NuxtLink :to="`products/${product.id}`" class="btn btn-primary"
      >View Detail</NuxtLink
    >
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style lang="scss" scoped></style>
