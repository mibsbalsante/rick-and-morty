<script setup lang="ts">
import { useCharactersStore } from '@str/characters'

const { pageNumber, charactersCount, hasLastPage, hasNextPage } =
  useCharactersStore()
</script>

<template>
  <section class="pagination">
    <p>Results: {{ charactersCount || 'Unknown' }}</p>
    <nav>
      Page {{ pageNumber }}

      <q-btn
        :disabled="!hasLastPage"
        color="primary"
        label="Last Page"
        @click="() => (pageNumber = pageNumber - 1)"
      />
      <q-btn
        :disabled="!hasNextPage"
        color="primary"
        label="Next Page"
        @click="() => (pageNumber = pageNumber + 1)"
      />
    </nav>
  </section>
</template>

<style scoped lang="scss">
.pagination {
  @include flex-container;
}
</style>
