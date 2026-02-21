<script setup>
import books from '../data/libros.json'
import Tarjeta from '../components/Tarjeta.vue'
</script>

<template>
  <section class="catalog">
    <h1>Catálogo de Libros</h1>

    <div class="grid">
      <Tarjeta
        v-for="book in books"
        :key="book.id"
        :book="book"
      />
    </div>
  </section>
</template>

<style scoped>
.catalog {
  padding: 2rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
}
</style>