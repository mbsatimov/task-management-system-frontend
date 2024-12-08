<script setup lang="ts">
import { SiteHeader } from '@/components/SiteHeader';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  CarouselItem,
} from '@/components/ui/carousel';
import { MentorCard, MentorCardSkeleton } from '@/components/MentorCard';
import MentorsFilters from './components/MentorsFilters.vue';
import { useMentorStore } from '@/stores/mentor';

const mentorStore = useMentorStore();

const resentMentors = mentorStore.resentMentors;
const mentors = mentorStore.mentors;

mentorStore.getResentMentors();
mentorStore.getMentors();
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
    <section v-if="resentMentors.isLoading">
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
              class="max-w-[360px] lg:pl-8"
              v-for="mentor in 6"
              :key="mentor"
            >
              <MentorCardSkeleton />
            </CarouselItem>
          </CarouselContent>
        </div>
      </Carousel>
    </section>
    <section v-else>
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
              class="w-full max-w-[360px] lg:pl-8"
              v-for="mentor in resentMentors.data"
              :key="mentor.id"
            >
              <MentorCard :mentor="mentor" />
            </CarouselItem>
          </CarouselContent>
        </div>
      </Carousel>
    </section>

    <section v-if="mentors.isLoading">
      <h2 class="text-xl font-semibold lg:text-2xl">Mentors</h2>
      <div
        class="mt-4 grid grid-cols-[repeat(auto-fit,_minmax(328px,_1fr))] gap-4 lg:gap-8"
      >
        <MentorCardSkeleton
          v-for="mentor in 10"
          :key="mentor"
          :mentor="mentor"
          :with-about="true"
        />
      </div>
    </section>
    <section v-else>
      <h2 class="text-xl font-semibold lg:text-2xl">Mentors</h2>
      <div
        class="mt-4 grid grid-cols-[repeat(auto-fit,_minmax(328px,_1fr))] gap-4 lg:gap-8"
      >
        <MentorCard
          v-for="mentor in mentors.data"
          :key="mentor.id"
          :mentor="mentor"
          :with-about="true"
        />
      </div>
    </section>
  </div>
</template>
