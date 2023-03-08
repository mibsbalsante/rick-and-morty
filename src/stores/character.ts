import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { defineStore, storeToRefs } from 'pinia'
import { useQuery } from '@vue/apollo-composable'

import { CHARACTER_QUERY } from '@gql/index'

const characterStore = defineStore('character', () => {
  const _route = useRoute()
  const params = computed(() => _route.params)

  const queryConfig = computed(() => ({
    id: params.value?.id
  }))

  const data = computed(() => useQuery(CHARACTER_QUERY, queryConfig))

  const character = computed(() => data.value?.result?.value?.character)

  return { character }
})

export const useCharacterStore = () => storeToRefs(characterStore())
