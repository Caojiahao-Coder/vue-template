<script setup lang="ts">
import SayHello from '@/components/SayHello.vue';
import { isDark } from '@/stores/setting-store';

</script>

<template>
  <main class="h-100vh bg-base color-base" @click="isDark = !isDark">
    <SayHello />
  </main>
</template>
