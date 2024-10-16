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
    <CardContent class="flex flex-col gap-1 px-4 py-3">
      <div
        v-for="(item, key) in data"
        :key="key"
        class="flex justify-between"
      >
        <span class="font-semibold">{{ item.value }}</span>
        <div class="flex items-center">
          <span class="ml-2 h-2.5 w-2.5">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 30 30"
            >
              <path
                d=" M 15 15 m -14, 0 a 14,14 0 1,1 28,0 a 14,14 0 1,1 -28,0"
                :stroke="item.color"
                :fill="item.color"
                stroke-width="1"
              />
            </svg>
          </span>
          <span>{{ item.name }}</span>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
