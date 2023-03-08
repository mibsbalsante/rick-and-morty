<script setup lang="ts">
import HomeSearch from '@cmp/HomeSearch.vue'
import HomeList from '@cmp/HomeList.vue'
import HomePagination from '@cmp/HomePagination.vue'
</script>

<template>
  <main class="page">
    <HomeSearch />
    <HomeList />
    <HomePagination />
  </main>
</template>

<style scoped lang="scss">
.page {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
</style>
