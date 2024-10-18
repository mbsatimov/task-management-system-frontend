<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card';

defineProps<{
  title?: string;
  data: {
    name: string;
    color: string;
    value: any;
  }[];
}>();
</script>

<template>
  <Card class="bg-secondary text-sm text-secondary-foreground">
    <CardContent class="flex flex-col gap-1 !p-0">
      <div
        v-for="(item, key) in data"
        :key="key"
        class="flex items-center justify-between gap-1 px-4 py-3"
      >
        <span class="font-semibold">{{ item.value }}</span>
        <span>{{ item.name }}</span>
      </div>
    </CardContent>
  </Card>
</template>
