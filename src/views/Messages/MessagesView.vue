<script setup lang="ts">
import { SiteHeader } from '@/components/SiteHeader';
import ChatList from './components/ChatList.vue';
import ChatDetails from './components/ChatDetails.vue';
</script>

<template>
  <SiteHeader class="border-b border-l bg-background">
    <template #title>
      <h1 class="text-2xl font-semibold">Messages</h1>
    </template>
  </SiteHeader>
  <div class="relative flex h-[calc(100vh-173px)] md:h-[calc(100svh-117px)]">
    <ChatList />
    <ChatDetails v-if="$route.query.chat" />
  </div>
</template>
