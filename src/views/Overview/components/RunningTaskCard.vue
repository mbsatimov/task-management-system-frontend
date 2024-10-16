<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card';
import { CircleProgress } from '@/components/ui/circle-progress';
</script>

<template>
  <Card class="bg-secondary text-secondary-foreground">
    <CardContent class="flex flex-row justify-between p-5 md:flex-col md:p-6">
      <div>
        <CardTitle>Running Task</CardTitle>
        <p class="text-[32px] font-semibold">65</p>
      </div>
      <div class="mt-4 flex items-center gap-[18px]">
        <CircleProgress :progress="45" />
        <div class="mr-3">
          <p class="text-xl font-semibold">100</p>
          <span class="text-sm font-medium text-secondary-300">Task</span>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
