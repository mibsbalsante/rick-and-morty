<script setup lang="ts">
import { computed, ref } from 'vue'
import { useQuery } from '@vue/apollo-composable'

import { CHARACTERS_QUERY } from '@gql/index'

const PAGE_RESULTS = 20

const pageNumber = ref(1)
const filterName = ref('')
const queryConfig = computed(() => ({
  page: pageNumber.value,
  name: filterName.value
}))

const data = useQuery(CHARACTERS_QUERY, queryConfig)

const characters = computed(() => data?.result?.value?.characters?.results)
const charactersCount = computed(
  () => data?.result?.value?.characters?.info?.count || 0
)

const hasNextPage = computed(
  () => Math.ceil(charactersCount.value / PAGE_RESULTS) > pageNumber.value
)
</script>

<template>
  <div>
    <q-input
      outlined
      v-model="filterName"
      debounce="500"
      label="Search by Name"
    />

    <ul>
      <li v-for="character in characters" :key="character.id">
        <p>{{ character.name }}</p>
        <q-img :src="character.image" :ratio="1" loading="lazy" width="300px" />
      </li>
    </ul>
    <p>Results: {{ charactersCount || 'Unknown' }}</p>
    <q-btn
      :disabled="pageNumber <= 1"
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
  </div>
</template>
