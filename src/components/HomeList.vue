<script setup lang="ts">
import { computed, ref } from 'vue'
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'

const CHARACTERS_QUERY = gql`
  query Characters($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        image
      }
    }
  }
`

const pageNumber = ref(1)
const queryConfig = computed(() => ({ page: pageNumber.value }))

const data = useQuery(CHARACTERS_QUERY, queryConfig)

const characters = computed(() => data?.result?.value?.characters?.results)
</script>

<template>
  <ul>
    <li v-for="character in characters" :key="character.id">
      <p>{{ character.name }}</p>
      <img :src="character.image" />
    </li>
  </ul>
</template>
