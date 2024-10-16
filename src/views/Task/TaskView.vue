<script setup lang="ts">
import { SiteHeader } from '@/components/SiteHeader';
import { SearchInput } from '@/components/SearchInput';
</script>

<template>
  <SiteHeader class="bg-background">
    <template #title>
      <h1 class="text-2xl font-semibold">Explore Task</h1>
    </template>

    <template #actions>
      <SearchInput placeholder="Search Task" />
    </template>
  </SiteHeader>
  <main>task</main>
</template>
