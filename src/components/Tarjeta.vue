<script setup>
defineProps({
  book: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="card">
    <router-link :to="`/product/${book.id}`">
      <img
        v-if="book.imagen"
        :src="book.imagen"
        :alt="book.title"
      />

      <h2>{{ book.title }}</h2>
      <p>{{ book.author }}</p>
      <small>{{ book.year }}</small>
    </router-link>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  transition: 0.2s ease;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  margin-bottom: 1rem;
}

h2 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

p {
  margin: 0;
}

small {
  color: gray;
}
</style>