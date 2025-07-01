<script setup lang="ts">
import SayHello from '@/components/SayHello.vue';
import { isDark } from '@/stores/setting-store';

const toggleTheme = () => {
  isDark.value = !isDark.value;
};

</script>

<template>
  <main class="h-100vh bg-base color-base" @click="toggleTheme">
    <SayHello />
  </main>
</template>
