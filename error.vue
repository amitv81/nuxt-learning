<template>
  <div>
    {{ error.statusCode }}
    <div>Oops</div>
    {{ error.message }}<br />
    <button class="btn btn-primary" @click="handleClearError">
      Show Products
    </button>
  </div>
</template>

<script setup>
defineProps(["error"]);

// Clearing the error and sending back to home page on button click
const handleClearError = () => clearError({ redirect: "/products" });
</script>

<style lang="scss" scoped></style>
