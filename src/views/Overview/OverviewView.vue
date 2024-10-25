<script setup lang="ts">
import { SiteHeader } from '@/components/SiteHeader';
import { IconMore } from '@/components/Icons';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  CarouselItem,
} from '@/components/ui/carousel';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MentorCard, MentorCardSkeleton } from '@/components/MentorCard';
import ActivityLineChart from './components/ActivityLineChart.vue';
import WeeklyCalendarCard from './components/WeeklyCalendarCard.vue';
import RunningTaskCard from './components/RunningTaskCard.vue';
import { TaskCard, TaskCardSkeleton } from '@/components/TaskCard';
import { useTaskStore } from '@/stores/task';
import { useMentorStore } from '@/stores/mentor';

const mentorStore = useMentorStore();
const taskStore = useTaskStore();

mentorStore.getMentors();
taskStore.getTasks();
taskStore.getTodayTask();
</script>

<template>
  <div class="2xl:flex">
    <div class="flex-1 overflow-hidden">
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

        <section v-if="mentorStore.isLoading">
          <Carousel>
            <div class="flex items-center justify-between gap-4">
              <h2 class="text-xl font-semibold lg:text-2xl">Recent Mentors</h2>
              <div class="flex gap-4">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </div>
            <div class="mt-5">
              <CarouselContent class="lg:-ml-8">
                <CarouselItem class="max-w-[360px] lg:pl-8" v-for="mentor in 6" :key="mentor">
                  <MentorCardSkeleton />
                </CarouselItem>
              </CarouselContent>
            </div>
          </Carousel>
        </section>
        <section v-else>
          <Carousel>
            <div class="flex items-center justify-between gap-4">
              <h2 class="text-xl font-semibold lg:text-2xl">Monthly Mentors</h2>
              <div class="flex gap-4">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </div>
            <div class="mt-5">
              <CarouselContent class="lg:-ml-8">
                <CarouselItem class="max-w-[360px] lg:pl-8" v-for="mentor in mentorStore.mentors" :key="mentor.id">
                  <MentorCard :mentor="mentor" />
                </CarouselItem>
              </CarouselContent>
            </div>
          </Carousel>
        </section>

        <section v-if="taskStore.isLoading">
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
                <CarouselItem class="max-w-[360px] lg:pl-8" v-for="task in 6" :key="task">
                  <TaskCardSkeleton />
                </CarouselItem>
              </CarouselContent>
            </div>
          </Carousel>
        </section>
        <section v-else>
          <Carousel>
            <div class="flex items-center justify-between gap-4">
              <h2 class="text-xl font-semibold lg:text-2xl">Upcoming Task</h2>
              <div class="flex gap-4">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </div>
            <div class="mt-5">
              <CarouselContent class="lg:-ml-8">
                <CarouselItem class="max-w-[360px] lg:pl-8" v-for="task in taskStore.tasks" :key="task.id">
                  <TaskCard :task="task" />
                </CarouselItem>
              </CarouselContent>
            </div>
          </Carousel>
        </section>
      </div>
    </div>

    <div class="sticky top-0 bg-muted 2xl:w-[436px]">
      <div class="space-y-8 p-6 md:p-8">
        <WeeklyCalendarCard />
        <TaskCardSkeleton v-if="taskStore.isLoading" :with-details="true" />
        <TaskCard :with-details="true" v-else-if="taskStore.todayTask" :task="taskStore.todayTask">
          <template #top>
            <div class="flex mb-5 items-center justify-between">
              <h2 class="text-xl font-semibold">Task Today</h2>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <IconMore />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </template>
        </TaskCard>
      </div>
    </div>
  </div>
</template>
