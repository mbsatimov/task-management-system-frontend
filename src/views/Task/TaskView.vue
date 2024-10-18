<script setup lang="ts">
import { SiteHeader } from '@/components/SiteHeader';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  CarouselItem,
} from '@/components/ui/carousel';
import { TaskCard } from '@/components/TaskCard';
import TaskFilters from './components/TaskFilters.vue';
import { tasksData } from './data';

const tasks = tasksData;
</script>

<template>
  <SiteHeader class="bg-background">
    <template #title>
      <h1 class="text-2xl font-semibold">Explore Task</h1>
    </template>

    <template #actions>
      <TaskFilters />
    </template>
  </SiteHeader>
  <div class="space-y-8 p-6 md:p-8">
    <section>
      <Carousel>
        <div class="flex items-center justify-between gap-4">
          <h2 class="text-xl font-semibold lg:text-2xl">Time Limit</h2>
          <div class="flex gap-4">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>
        <div class="mt-5">
          <CarouselContent>
            <CarouselItem
              class="max-w-[328px]"
              v-for="task in tasks"
              :key="task.id"
            >
              <TaskCard :task="task" />
            </CarouselItem>
          </CarouselContent>
        </div>
      </Carousel>
    </section>
    <section>
      <Carousel>
        <div class="flex items-center justify-between gap-4">
          <h2 class="text-xl font-semibold lg:text-2xl">New Task</h2>
          <div class="flex gap-4">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>
        <div class="mt-5">
          <CarouselContent>
            <CarouselItem
              class="max-w-[328px]"
              v-for="task in tasks"
              :key="task.id"
            >
              <TaskCard :task="task" />
            </CarouselItem>
          </CarouselContent>
        </div>
      </Carousel>
    </section>
  </div>
</template>
