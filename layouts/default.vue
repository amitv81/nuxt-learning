<template>
  <header>
    <nav>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li>
          <NuxtLink to="/products/product-detail">Product Detail</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>

  <!-- Output the page content -->
  <div>
    <slot />
  </div>
</template>

<style scoped>
.router-link-active {
  color: red;
}
</style>
