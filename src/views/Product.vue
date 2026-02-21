<script setup>
import { computed } from 'vue'
import books from '../data/libros.json'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

/*
  El id llega como string.
  Como en el JSON es número,
  lo convertimos para comparar.
*/
const book = computed(() => {
  return books.find(b => b.id === Number(props.id))
})
</script>

<template>
  <section class="product">
    <div v-if="book">
      <img
        v-if="book.imagen"
        :src="book.imagen"
        :alt="book.title"
      />

      <h1>{{ book.title }}</h1>
      <p><strong>Autor:</strong> {{ book.author }}</p>
      <p><strong>Año:</strong> {{ book.year }}</p>
      <p class="description">{{ book.description }}</p>
    </div>

    <div v-else>
      <h2>Libro no encontrado</h2>
      <router-link to="/catalog">
        Volver al catálogo
      </router-link>
    </div>
  </section>
</template>

<style scoped>
.product {
  padding: 2rem;
  max-width: 800px;
  margin: auto;
}

img {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 1.5rem;
}

.description {
  margin-top: 1rem;
  line-height: 1.6;
}
</style>