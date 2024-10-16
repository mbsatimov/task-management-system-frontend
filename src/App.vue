<script setup lang="ts">
import { RouterView } from 'vue-router';
import { SiteSidebar } from '@/components/SiteSidebar';
</script>

<template>
  <div class="h-screen overflow-hidden lg:flex">
    <SiteSidebar />
    <main class="flex-1 overflow-y-auto bg-[#FAFAFA]">
      <RouterView />
    </main>
  </div>
</template>
