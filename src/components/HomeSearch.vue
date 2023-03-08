<script setup lang="ts">
import { useCharactersStore } from '@str/characters'

const { filterName } = useCharactersStore()
</script>

<template>
  <section class="search">
    <q-input
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
}
</style>
