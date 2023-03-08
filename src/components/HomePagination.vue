<script setup lang="ts">
import { fasAngleLeft, fasAngleRight } from '@quasar/extras/fontawesome-v6'
import { useCharactersStore } from '@str/characters'

const { pageNumber, charactersCount, hasLastPage, hasNextPage } =
  useCharactersStore()
</script>

<template>
  <section class="pagination">
    <q-chip color="secondary" text-color="white">
      {{ charactersCount || 'Unknown' }} Results
    </q-chip>
    <nav class="pagination__nav">
      <q-btn
        :disabled="!hasLastPage"
        color="primary"
        :icon="fasAngleLeft"
        title="Last Page"
        @click="() => (pageNumber = pageNumber - 1)"
      />
      <q-btn disabled color="primary" :label="pageNumber" />
      <q-btn
        :disabled="!hasNextPage"
        color="primary"
        :icon="fasAngleRight"
        title="Next Page"
        @click="() => (pageNumber = pageNumber + 1)"
      />
    </nav>
  </section>
</template>

<style scoped lang="scss">
.pagination {
  @include flex-container;

  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;

  &__nav {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  @media (max-width: 480px) {
    flex-direction: column-reverse;
  }
}
</style>
