<script setup lang="ts">
import { fasFlask } from '@quasar/extras/fontawesome-v6'
</script>

<template>
  <header class="header">
    <div class="header__container">
      <h1 class="header__title">Rick & Morty Database</h1>
      <q-icon :name="fasFlask" />
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
  color: var(--color-white);
  box-shadow: var(--shadow);
  z-index: 1;

  &__container {
    height: var(--size-header);
    gap: 12px;

    @include flex-container;
  }

  &__title {
    font-size: 1.8rem;
    margin: 0;
  }
}
</style>
