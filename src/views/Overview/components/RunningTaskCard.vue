<script setup lang="ts">
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { CircleProgress } from '@/components/ui/circle-progress';
import { Skeleton } from '@/components/ui/skeleton';
import { useStatisticsStore } from '@/stores/statistics';

const statisticsStore = useStatisticsStore();

statisticsStore.getRunningTask();
</script>

<template>
  <Card
    v-if="statisticsStore.isLoading"
    class="bg-secondary text-secondary-foreground"
  >
    <CardContent class="flex flex-row justify-between p-5 md:flex-col md:p-6">
      <div class="space-y-2">
        <Skeleton class="h-[18px] w-28 bg-white" />
        <Skeleton class="h-[18px] w-28 bg-white" />
      </div>
      <div class="mt-12 flex items-center gap-[18px]">
        <CircleProgress :progress="0" />
        <div class="space-y-2">
          <Skeleton class="h-[14px] w-14 bg-white" />
          <Skeleton class="h-[14px] w-14 bg-white" />
        </div>
      </div>
    </CardContent>
  </Card>
  <Card
    v-else-if="statisticsStore.runningTask"
    class="bg-secondary text-secondary-foreground"
  >
    <CardContent class="flex flex-row justify-between p-5 md:flex-col md:p-6">
      <div>
        <CardTitle>Running Task</CardTitle>
        <p class="text-[32px] font-semibold">
          {{ statisticsStore.runningTask?.completed }}
        </p>
      </div>
      <div class="mt-4 flex items-center gap-[18px]">
        <CircleProgress
          :progress="
            Math.round(
              (statisticsStore.runningTask?.total / 100) *
                statisticsStore.runningTask?.completed
            )
          "
        />
        <div class="mr-3">
          <p class="text-xl font-semibold">
            {{ statisticsStore.runningTask?.total }}
          </p>
          <span class="text-sm font-medium text-secondary-300">Task</span>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
