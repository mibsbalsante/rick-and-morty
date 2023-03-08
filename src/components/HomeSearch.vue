<script setup lang="ts">
import { useCharactersStore } from '@str/characters'

const { filterName } = useCharactersStore()
</script>

<template>
  <section class="search">
    <q-input
      class="search__input"
      outlined
      v-model="filterName"
      debounce="500"
      label="Search by Name"
    />
  </section>
</template>

<style scoped lang="scss">
.search {
  @include flex-container;

  &__input {
    width: 100%;
    max-width: 320px;
  }
}
</style>
