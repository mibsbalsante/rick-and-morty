<script setup lang="ts">
import { useCharacterStore } from '@str/character'

const { character } = useCharacterStore()

console.log(character?.value)
</script>

<template>
  <div v-if="character">
    <h2>{{ character.name }}</h2>

    <q-img :src="character.image" :ratio="1" loading="lazy" width="300px" />

    <p>{{ character.species }} ({{ character.status }})</p>
    <p>origin: {{ character.origin.name }}</p>
    <p>last known location: {{ character.location.name }}</p>

    <h3>Episodes list</h3>

    <table>
      <tbody>
        <tr v-for="episode in character.episode" :key="episode.id">
          <td>{{ episode.episode }}</td>
          <td>{{ episode.name }}</td>
          <td>{{ episode.air_date }}</td>
          <td>
            <a
              v-for="epCharacter in episode.characters"
              :key="epCharacter.id"
              >{{ epCharacter.name }}</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
