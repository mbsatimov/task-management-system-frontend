<script setup lang="ts">
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { CircleProgress } from '@/components/ui/circle-progress';
import { Skeleton } from '@/components/ui/skeleton';
import { useStatisticsStore } from '@/stores/statistics';

const statisticsStore = useStatisticsStore();

const runningTask = statisticsStore.runningTask;

statisticsStore.getRunningTask();
</script>

<template>
  <Card
    v-if="runningTask.isLoading"
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
    v-else-if="runningTask.data"
    class="bg-secondary text-secondary-foreground"
  >
    <CardContent class="flex flex-row justify-between p-5 md:flex-col md:p-6">
      <div>
        <CardTitle>Running Task</CardTitle>
        <p class="text-[32px] font-semibold">
          {{ runningTask.data.completed }}
        </p>
      </div>
      <div class="mt-4 flex items-center gap-[18px]">
        <CircleProgress
          :progress="
            Math.round(
              (runningTask.data.total / 100) * runningTask.data.completed
            )
          "
        />
        <div class="mr-3">
          <p class="text-xl font-semibold">
            {{ runningTask.data.total }}
          </p>
          <span class="text-sm font-medium text-secondary-300">Task</span>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
