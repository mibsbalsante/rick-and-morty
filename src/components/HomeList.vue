<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useCharactersStore } from '@str/characters'

const { characters } = useCharactersStore()
</script>

<template>
  <section class="list">
    <nav class="list__nav">
      <RouterLink
        v-for="character in characters"
        :to="`/character/${character.id}`"
        :key="character.id"
      >
        <p>{{ character.name }}</p>
        <q-img :src="character.image" :ratio="1" loading="lazy" width="224px" />
      </RouterLink>
    </nav>
  </section>
</template>

<style scoped lang="scss">
.list {
  @include flex-container;

  &__nav {
    display: flex;
    flex-wrap: wrap;
    gap: 32px 24px;
  }
}
</style>
