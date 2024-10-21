<script setup lang="ts">
import { VideoPlayer } from '@/components/VideoPlayer';
import { FileUploader } from '@/components/FileUploader';
import {
  IconProfile2,
  IconTickCircle,
  IconTimeCircle,
} from '@/components/Icons';
import { SiteHeader } from '@/components/SiteHeader';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { tasksData } from './data';
import { ref } from 'vue';

const task = tasksData[0];

const file = ref<File>();

console.log(file.value);
</script>

<template>
  <SiteHeader class="bg-background">
    <template #title>
      <h1 class="text-2xl font-semibold">Explore Task</h1>
    </template>
  </SiteHeader>
  <div
    class="grid items-start gap-6 overflow-y-auto p-6 md:gap-8 md:p-8 xl:grid-cols-[auto_372px]"
  >
    <Card>
      <div class="overflow-hidden rounded-md">
        <VideoPlayer src="/video.mp4" />
      </div>
      <CardHeader class="gap-0 space-y-4">
        <CardTitle class="text-[32px]">{{ task.title }}</CardTitle>
        <div class="flex items-center">
          <p class="text-sm font-medium text-secondary-400">
            {{ task.direction }}
          </p>
          <Separator
            orientation="vertical"
            class="mx-2.5 h-7"
          />
          <Button
            class="h-auto p-0 text-sm text-[#04A4F4]"
            variant="link"
            >+ Get Mentors</Button
          >
        </div>
        <div class="flex gap-5">
          <div class="flex gap-2.5">
            <IconProfile2 class="size-4 text-secondary-400" />
            <p class="text-sm font-medium">
              {{ task.description }}
            </p>
          </div>
          <div class="flex gap-2.5">
            <IconTimeCircle class="size-4 text-secondary-400" />
            <p class="text-sm font-medium">
              {{ task.duration }}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent class="space-y-6">
        <h3 class="text-2xl font-semibold">Description</h3>
        <p class="mt-4 text-sm font-normal text-secondary">
          {{ task.description }}
        </p>
        <h3 class="text-2xl font-semibold">Essence of Assessment</h3>
        <ul class="mt-4 space-y-5 text-sm font-normal text-secondary">
          <li
            v-for="item in task.details"
            :key="item"
            class="flex gap-2.5"
          >
            <IconTickCircle class="shrink-0 text-primary" />
            <p>
              {{ item }}
            </p>
          </li>
        </ul>
      </CardContent>
    </Card>

    <Card>
      <CardHeader class="gap-0">
        <p class="text-sm font-semibold">Assigned Assignments</p>
        <CardTitle class="mt-6 text-[32px]">{{ task.title }}</CardTitle>
        <p class="mt-3 text-sm font-medium text-secondary-400">
          {{ task.direction }}
        </p>
      </CardHeader>
      <CardContent class="space-y-6">
        <div class="space-y-5">
          <h3 class="text-2xl font-semibold">Detail Student</h3>
          <ul class="space-y-5">
            <li class="flex justify-between gap-4">
              <span class="text-sm text-secondary-400">Student's Name</span>
              <p class="text-sm font-semibold">Dennis Nzioki</p>
            </li>
            <li class="flex justify-between gap-4">
              <span class="text-sm text-secondary-400">Student Class</span>
              <p class="text-sm font-semibold">MIPA 2</p>
            </li>
            <li class="flex justify-between gap-4">
              <span class="text-sm text-secondary-400">Student Number</span>
              <p class="text-sm font-semibold">10</p>
            </li>
          </ul>
        </div>
        <div class="space-y-5">
          <h3 class="text-2xl font-semibold">File Task</h3>
          <ul class="space-y-5">
            <li class="flex justify-between gap-4">
              <span class="text-sm text-secondary-400">Last Modified</span>
              <p class="text-sm font-semibold">1 July 2022</p>
            </li>
          </ul>
          <p>File submissions</p>
          <FileUploader
            class="aspect-[2/1]"
            :value="file"
            @value-change="file = $event"
          />
          {{ file?.name }}
          <p class="!mt-3 text-xs font-normal text-secondary-400">
            *drag or browser from device
          </p>
        </div>
      </CardContent>
      <CardFooter><Button class="w-full">Submit</Button></CardFooter>
    </Card>
  </div>
</template>
