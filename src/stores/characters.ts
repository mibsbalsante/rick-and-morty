import { ref, computed } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import { useQuery } from '@vue/apollo-composable'

import { CHARACTERS_QUERY } from '@gql/index'

const PAGE_RESULTS = 20

const charactersStore = defineStore('characters', () => {
  const pageNumber = ref(1)
  const filterName = ref('')
  const queryConfig = computed(() => ({
    page: pageNumber.value,
    name: filterName.value
  }))

  const data = computed(() => useQuery(CHARACTERS_QUERY, queryConfig))

  const characters = computed(
    () => data.value?.result?.value?.characters?.results
  )
  const charactersCount = computed(
    () => data.value?.result?.value?.characters?.info?.count || 0
  )

  const hasLastPage = computed(() => pageNumber.value > 1)

  const hasNextPage = computed(
    () => Math.ceil(charactersCount.value / PAGE_RESULTS) > pageNumber.value
  )

  return {
    pageNumber,
    filterName,
    characters,
    charactersCount,
    hasLastPage,
    hasNextPage
  }
})

export const useCharactersStore = () => storeToRefs(charactersStore())
export const useCharactersActions = () => charactersStore()
