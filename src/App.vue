<script setup>
</script>

<template>
  <div>
    <header class="navbar">
      <nav>
        <router-link to="/">Inicio</router-link>
        <router-link to="/catalog">Catálogo</router-link>
        <router-link to="/about">About</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.navbar {
  background: #222;
  padding: 1rem;
}

nav {
  display: flex;
  gap: 1.5rem;
}

a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

a.router-link-active {
  border-bottom: 2px solid white;
}

main {
  padding: 2rem;
}
</style>