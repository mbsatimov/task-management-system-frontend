<script setup lang="ts">
import { RouterView } from 'vue-router';
import { SiteSidebar } from '@/components/SiteSidebar';
import { Toaster } from '@/components/ui/sonner';
import { useAuthStore } from './stores/auth';
import { Loader2Icon } from 'lucide-vue-next';
const authStore = useAuthStore();
authStore.refresh();
</script>

<template>
  <div
    v-if="authStore.token === undefined"
    class="flex h-screen items-center justify-center"
  >
    <Loader2Icon class="size-8 animate-spin text-primary" />
  </div>
  <div
    class="h-screen lg:flex"
    v-else
  >
    <SiteSidebar v-if="!$route.meta.hideSidebar" />
    <main class="overflow-y-auto bg-[#FAFAFA] lg:flex-1">
      <RouterView />
    </main>
    <Toaster />
  </div>
</template>
