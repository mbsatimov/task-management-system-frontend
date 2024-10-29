<script setup lang="ts">
import { SiteHeader } from '@/components/SiteHeader';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  CarouselItem,
} from '@/components/ui/carousel';
import { TaskCard, TaskCardSkeleton } from '@/components/TaskCard';
import TaskFilters from './components/TaskFilters.vue';
import { useTaskStore } from '@/stores/task';

const taskStore = useTaskStore();

const timeLimitedTasks = taskStore.timeLimitedTasks;
const newTasks = taskStore.newTasks;

taskStore.getTimeLimitedTasks();
taskStore.getNewTasks();
</script>

<template>
  <SiteHeader class="bg-background">
    <template #title>
      <h1 class="text-2xl font-semibold">Time Limit</h1>
    </template>

    <template #actions>
      <TaskFilters />
    </template>
  </SiteHeader>
  <div class="space-y-8 p-6 md:p-8">
    <section v-if="timeLimitedTasks.isLoading">
      <Carousel>
        <div class="flex items-center justify-between gap-4">
          <h2 class="text-xl font-semibold lg:text-2xl">Time Limit</h2>
          <div class="flex gap-4">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>
        <div class="mt-5">
          <CarouselContent class="lg:-ml-8">
            <CarouselItem
              class="max-w-[360px] lg:pl-8"
              v-for="task in 6"
              :key="task"
            >
              <TaskCardSkeleton />
            </CarouselItem>
          </CarouselContent>
        </div>
      </Carousel>
    </section>
    <section v-else>
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
              class="max-w-[360px]"
              v-for="task in timeLimitedTasks.data"
              :key="task.id"
            >
              <TaskCard :task="task" />
            </CarouselItem>
          </CarouselContent>
        </div>
      </Carousel>
    </section>

    <section v-if="newTasks.isLoading">
      <Carousel>
        <div class="flex items-center justify-between gap-4">
          <h2 class="text-xl font-semibold lg:text-2xl">New Task</h2>
          <div class="flex gap-4">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>
        <div class="mt-5">
          <CarouselContent class="lg:-ml-8">
            <CarouselItem
              class="max-w-[360px] lg:pl-8"
              v-for="task in 6"
              :key="task"
            >
              <TaskCardSkeleton />
            </CarouselItem>
          </CarouselContent>
        </div>
      </Carousel>
    </section>
    <section v-else>
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
              class="max-w-[360px]"
              v-for="task in newTasks.data"
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
