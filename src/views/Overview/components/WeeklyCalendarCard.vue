<script setup lang="ts">
import { ref } from 'vue';
import { startOfWeek, addDays, format, isToday } from 'date-fns';
import { IconArrowLeft, IconArrowRight } from '@/components/Icons';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const getWeekDates = (date: Date = new Date()) => {
  const startDate = startOfWeek(date, { weekStartsOn: 1 });
  const dates: Date[] = [];
  for (let i = 0; i < 7; i++) {
    dates.push(addDays(startDate, i));
  }
  return dates;
};

const currentWeekDates = ref(getWeekDates());

const setCurrentWeekDate = (num: number) => {
  currentWeekDates.value = getWeekDates(
    addDays(currentWeekDates.value[0], num)
  );
};
</script>
<template>
  <Card>
    <CardHeader class="flex flex-row items-center justify-between">
      <Button
        variant="ghost"
        size="iconSm"
        @click="setCurrentWeekDate(-7)"
      >
        <IconArrowLeft class="size-5" />
      </Button>
      <p>{{ format(currentWeekDates[0], 'MMMM yyyy') }}</p>
      <Button
        variant="ghost"
        size="iconSm"
        @click="setCurrentWeekDate(7)"
      >
        <IconArrowRight class="size-5" />
      </Button>
    </CardHeader>
    <CardContent class="flex justify-between gap-1.5">
      <div
        v-for="date in currentWeekDates"
        :key="date.getTime()"
        :class="
          cn(
            'flex flex-col items-center gap-3 rounded-xl px-1 py-1.5 text-xs font-semibold',
            {
              'bg-secondary text-primary-foreground': isToday(date),
            }
          )
        "
      >
        <div>
          {{ format(date, 'EEEEE') }}
        </div>
        <div
          :class="
            cn(
              'flex size-8 shrink-0 items-center justify-center rounded-full bg-muted',
              {
                'bg-primary text-primary-foreground': isToday(date),
              }
            )
          "
        >
          {{ format(date, 'dd') }}
        </div>
      </div>
    </CardContent>
  </Card>
</template>
