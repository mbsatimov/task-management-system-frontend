<script setup lang="ts">
import { LineChart } from '@/components/ui/chart-line';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { useStatisticsStore } from '@/stores/statistics';

const statisticsStore = useStatisticsStore();

const activities = statisticsStore.activities;

statisticsStore.getActivities();
</script>
<template>
  <div class="flex-1 overflow-hidden rounded-md bg-muted p-5">
    <div class="mb-5 flex justify-between">
      <h3 class="text-base font-semibold">Activity</h3>
      <Select>
        <SelectTrigger class="h-6 w-fit bg-transparent px-1 py-1">
          <SelectValue placeholder="This Week" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="this-week">This Week</SelectItem>
            <SelectItem value="last-week">Last Week</SelectItem>
            <SelectItem value="last-month">Last Month</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    <Skeleton
      v-if="activities.isLoading"
      class="h-[130px] w-full bg-white"
    />
    <LineChart
      v-else-if="activities.data"
      class="h-[130px] rounded-md bg-white"
      :data="activities.data"
      index="day"
      :show-legend="false"
      :categories="['completedTasks']"
      :num-x-ticks="7"
      :num-y-ticks="2"
    />
  </div>
</template>
