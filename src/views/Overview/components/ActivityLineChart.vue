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

const data = [
  {
    day: 'S',
    Tasks: 1,
  },
  {
    day: 'M',
    Tasks: 2,
  },
  {
    day: 'T',
    Tasks: 3,
  },
  {
    day: 'W',
    Tasks: 2,
  },
  {
    day: 'T',
    Tasks: 2,
  },
  {
    day: 'F',
    Tasks: 1,
  },
];
</script>

<template>
  <div class="flex-1 rounded-md bg-muted p-5">
    <div class="mb-5 flex justify-between">
      <h3 class="text-base font-semibold">Activity</h3>
      <Select>
        <SelectTrigger class="h-6 w-fit bg-transparent py-0">
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
    <LineChart
      class="h-[130px] rounded-md bg-white"
      :data="data"
      index="day"
      :show-legend="false"
      :categories="['Tasks']"
    />
  </div>
</template>
