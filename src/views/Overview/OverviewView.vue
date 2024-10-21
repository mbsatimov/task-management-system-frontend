<script setup lang="ts">
import { SiteHeader } from '@/components/SiteHeader';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  CarouselItem,
} from '@/components/ui/carousel';
import { MentorCard } from '@/components/MentorCard';
import ActivityLineChart from './components/ActivityLineChart.vue';
import WeeklyCalendarCard from './components/WeeklyCalendarCard.vue';
import RunningTaskCard from './components/RunningTaskCard.vue';
import { mentorsData, tasksData } from './data';
import { TaskCard } from '@/components/TaskCard';

const mentors = mentorsData;
const tasks = tasksData;
</script>

<template>
  <div class="h-full 2xl:mr-[436px]">
    <div>
      <SiteHeader>
        <template #title>
          <h1 class="text-2xl font-semibold">Hi, Dennis Nzioki</h1>
          <p class="mt-2 text-base font-medium text-secondary-400">
            Let's finish your task today!
          </p>
        </template>
      </SiteHeader>

      <div class="space-y-8 p-6 md:p-8">
        <div class="flex flex-col gap-8 md:flex-row">
          <RunningTaskCard />
          <ActivityLineChart />
        </div>

        <section>
          <Carousel>
            <div class="flex items-center justify-between gap-4">
              <h2 class="text-xl font-semibold lg:text-2xl">Monthly Mentors</h2>
              <div class="flex gap-4">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </div>
            <div class="mt-5">
              <CarouselContent>
                <CarouselItem
                  class="md:basis-1/2"
                  v-for="mentor in mentors"
                  :key="mentor.id"
                >
                  <MentorCard :mentor="mentor" />
                </CarouselItem>
              </CarouselContent>
            </div>
          </Carousel>
        </section>

        <section>
          <Carousel>
            <div class="flex items-center justify-between gap-4">
              <h2 class="text-xl font-semibold lg:text-2xl">Upcoming Task</h2>
              <div class="flex gap-4">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </div>
            <div class="mt-5">
              <CarouselContent>
                <CarouselItem
                  class="md:basis-1/2"
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
    </div>

    <div class="right-4 top-0 h-full bg-muted 2xl:fixed 2xl:w-[436px]">
      <div class="space-y-8 p-6 md:p-8">
        <WeeklyCalendarCard />
        <TaskCard
          :with-details="true"
          :task="{
            id: 1,
            title: 'Task 1',
            direction: 'Frontend Developer',
            progress: 60,
            duration: '2h 30m',
            image:
              'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
            createdAt: '2022-01-01',
            assignedTo: [],
            details: ['Task 1', 'Task 2', 'Task 3'],
          }"
        />
      </div>
    </div>
  </div>
</template>
