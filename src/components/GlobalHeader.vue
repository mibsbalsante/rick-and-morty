<script setup lang="ts"></script>

<template>
  <header class="header">
    <div class="header__container"><h1>Rick & Morty Characters</h1></div>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;

  &__container {
    display: flex;
    align-items: center;
    height: var(--size-header);
  }
}
</style>
