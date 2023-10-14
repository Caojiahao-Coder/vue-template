<script setup lang="ts">
import { computed } from 'vue';
import { themeColor } from '@/stores/setting-store'

const style = computed<any>(() => ({
  '--theme-color': themeColor.value
}))
</script>

<template>
  <main :style="style">
    <RouterView />
  </main>
</template>
<style>

html,
body {
  padding: 0;
  margin: 0;
}
</style>
