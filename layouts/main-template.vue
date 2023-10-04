<template>
  <!-- Output the page content -->
  <div class="container">
    <slot />
  </div>
  <footer class="">
    <nav>
      Copyright @134 - This is a home page footer getting from main-template
      <ul>
        <li><NuxtLink to="/products">Home</NuxtLink></li>
        <li>
          <NuxtLink to="/products/product-detail">Product Detail</NuxtLink>
        </li>
      </ul>
    </nav>
  </footer>
</template>
<style scoped>
footer {
  background: #ededed;
  padding: 10px;
  text-align: center;
}
</style>
