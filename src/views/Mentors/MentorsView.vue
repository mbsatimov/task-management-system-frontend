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
import MentorsFilters from './components/MentorsFilters.vue';

import { mentorsData } from './data';

const mentors = mentorsData;
</script>

<template>
  <SiteHeader class="bg-background">
    <template #title>
      <h1 class="text-2xl font-semibold">Explore Mentor</h1>
    </template>

    <template #actions>
      <MentorsFilters />
    </template>
  </SiteHeader>
  <div class="space-y-8 p-6 md:p-8">
    <section>
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
            <CarouselItem
              class="max-w-[328px] lg:pl-8"
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
      <h2 class="text-xl font-semibold lg:text-2xl">Mentors</h2>
      <div
        class="mt-4 grid grid-cols-[repeat(auto-fit,_minmax(328px,_1fr))] gap-4 lg:gap-8"
      >
        <MentorCard
          v-for="mentor in mentors"
          :key="mentor.id"
          :mentor="mentor"
          :with-about="true"
        />
      </div>
    </section>
  </div>
</template>
