<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { fasAngleDown } from '@quasar/extras/fontawesome-v6'

import { useCharacterStore } from '@str/character'

const { character } = useCharacterStore()
</script>

<template>
  <div v-if="character" class="page">
    <div class="page__info">
      <h2 class="page__title">{{ character.name }}</h2>

      <q-card class="page__info-card">
        <p>{{ character.species }} ({{ character.status }})</p>
        <p>Origin: {{ character.origin.name }}</p>
        <p>Last Known Location: {{ character.location.name }}</p>
      </q-card>
    </div>

    <q-img :src="character.image" :ratio="1" loading="lazy" width="250px" />

    <h3 class="page__title-section">Episodes list</h3>

    <q-card class="overflow">
      <table class="table">
        <thead>
          <tr>
            <th>Episode</th>
            <th>Name</th>
            <th>Air Date</th>
            <th>Characters</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="episode in character.episode" :key="episode.id">
            <td>{{ episode.episode }}</td>
            <td>{{ episode.name }}</td>
            <td>{{ episode.air_date }}</td>
            <td>
              <q-expansion-item
                expand-separator
                label="See all"
                :expand-icon="fasAngleDown"
              >
                <q-list bordered separator>
                  <q-item
                    clickable
                    v-ripple
                    v-for="epCharacter in episode.characters"
                    :key="epCharacter.id"
                  >
                    <q-item-section avatar>
                      <q-avatar rounded>
                        <img :src="epCharacter.image" />
                      </q-avatar>
                    </q-item-section>
                    <q-item-section>
                      <RouterLink
                        :to="{
                          name: 'character',
                          params: { id: epCharacter.id }
                        }"
                      >
                        {{ epCharacter.name }}
                      </RouterLink>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-expansion-item>
            </td>
          </tr>
        </tbody>
      </table>
    </q-card>
  </div>
</template>

<style scoped lang="scss">
.page {
  @include flex-container;

  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 24px;

  &__title {
    margin: 0;
    font-size: 2rem;
    line-height: 1.2;
    font-weight: 500;
  }

  &__title-section {
    margin: 0;
    font-size: 1.8rem;
    line-height: 1.2;
    width: 100%;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 24px;

    &-card {
      background-color: var(--color-background-2);
      padding: 16px 12px;
    }
  }
}

.overflow {
  width: 100%;
  overflow: auto;
  background-color: var(--color-background-2);
  padding: 16px 12px;
}

.table {
  width: 100%;
  border-collapse: collapse;

  th:last-of-type {
    min-width: 220px;
  }

  th {
    padding: 2px 6px 4px;
    border-bottom: 1px solid var(--color-text);
    text-align: left;
  }

  td {
    padding: 2px 6px;
  }
}
</style>
