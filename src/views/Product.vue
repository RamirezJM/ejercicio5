<script setup>
import { computed } from 'vue'
import books from '../data/libros.json'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const base = import.meta.env.BASE_URL

/*
  El id llega como string.
  Como en el JSON es número,
  lo convierto para comparar.
*/
const book = computed(() => {
  return books.find(b => b.id === Number(props.id))
})


</script>

<template>
  <section class="product">
    <div v-if="book">
      <img v-if="book.imagen" :src="base + book.imagen" :alt="book.title" />
      <h1>{{ book.title }}</h1>
      <p><strong>Autor:</strong> {{ book.author }}</p>
      <p><strong>Año:</strong> {{ book.year }}</p>
      <p class="description">{{ book.description }}</p>
    </div>

    <!-- si se agrega un id no existente se muestra
     el mensaje de respaldo -->
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
  padding: 2em;
  max-width: 500px;
  margin: auto;
  border: 2px solid #323232;
  border-radius: 5px;
}

img {
  aspect-ratio: 1/1.5;
  object-fit: cover;
}
</style>