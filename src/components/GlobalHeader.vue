<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { fasFlask } from '@quasar/extras/fontawesome-v6'
</script>

<template>
  <header class="header">
    <div class="header__container">
      <RouterLink to="/" class="header__link">
        <h1 class="header__title">Rick & Morty Database</h1>
      </RouterLink>
      <q-icon :name="fasFlask" class="header__icon" />
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: $quasar-primary;
  box-shadow: var(--shadow);
  z-index: 1;

  &__container {
    min-height: var(--size-header);
    gap: 12px;

    @include flex-container;
  }

  &__link {
    text-decoration: none;
  }

  &__link,
  &__icon {
    color: var(--color-white);
  }

  &__title {
    font-size: 1.8rem;
    line-height: 1.2;
    margin: 0;
  }
}
</style>
