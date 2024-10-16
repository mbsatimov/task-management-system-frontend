<script setup lang="ts">
import { RouterView } from 'vue-router';
import { SiteSidebar } from '@/components/SiteSidebar';
</script>

<template>
  <div class="h-screen lg:flex">
    <SiteSidebar />
    <main class="overflow-y-auto bg-[#FAFAFA] lg:flex-1">
      <RouterView />
    </main>
  </div>
</template>
