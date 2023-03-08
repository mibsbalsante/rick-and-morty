<script setup lang="ts">
import { useCharactersStore } from '@str/characters'
import HomeLink from '@cmp/HomeLink.vue'

const { characters } = useCharactersStore()
</script>

<template>
  <section class="list">
    <h2 class="list__title">Characters list</h2>

    <nav class="list__nav">
      <HomeLink
        v-for="character in characters"
        v-bind="character"
        :key="character.id"
      />
    </nav>
  </section>
</template>

<style scoped lang="scss">
.list {
  @include flex-container;

  flex-direction: column;
  gap: 24px;

  &__title {
    width: 100%;
    margin: 0;
    font-size: 2rem;
    font-weight: 500;
  }

  &__nav {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 32px 24px;
  }
}
</style>
