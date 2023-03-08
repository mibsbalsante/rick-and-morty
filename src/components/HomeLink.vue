<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  id: string
  name: string
  image: string
}>()
</script>

<template>
  <RouterLink
    class="link"
    :to="{ name: 'character', params: { id: id } }"
    :key="id"
  >
    <p class="link__title">{{ name }}</p>
    <q-img :src="image" :ratio="1" loading="lazy" width="200px" />
  </RouterLink>
</template>

<style scoped lang="scss">
.link {
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-decoration: none;
  padding: 16px 12px;
  border-radius: 2px;
  background-color: var(--color-background-2);

  &:hover {
    box-shadow: var(--shadow);
  }

  &__title {
    margin: 0;
  }
}
</style>
