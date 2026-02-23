<script setup>
defineProps({
  book: {
    type: Object,
    required: true
  }
})

const base = import.meta.env.BASE_URL
</script>

<template>
  <div class="card">
    <router-link :to="`/product/${book.id}`">
      <img
        v-if="book.imagen"
        :src="base + book.imagen"
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #323232;
  padding: 1em;
  border-radius: 5px;
  transition: 0.2s ease;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

img {
  aspect-ratio: 1/1.5;
  object-fit: cover;
    
}

h2 {
  font-size: 1.1rem;
}

p {
  margin: 0;
}

small {
  color: gray;
}
</style>