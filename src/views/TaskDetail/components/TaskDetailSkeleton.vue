<script setup lang="ts">
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { IconFolderOpen, IconGallery } from '@/components/Icons';
import { Skeleton } from '@/components/ui/skeleton';
</script>
<template>
  <div
    class="grid items-start gap-6 overflow-y-auto p-6 md:gap-8 md:p-8 xl:grid-cols-[auto_372px]"
  >
    <Card>
      <div class="relative aspect-video rounded-md border border-primary/30">
        <IconGallery
          class="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-primary/40"
        />
        <div
          class="absolute bottom-4 left-4 right-4 z-10 flex h-10 items-center gap-3 rounded-md px-3 md:bottom-6 md:left-6 md:right-6 md:h-11 md:gap-10 md:px-6"
        >
          <div class="flex flex-1 items-center gap-2 md:gap-6">
            <Skeleton class="size-3 md:size-4" />
            <div
              class="relative h-1.5 flex-1 cursor-pointer rounded-md bg-muted md:h-2"
            >
              <Skeleton class="h-full w-20" />
            </div>
            <Skeleton class="h-3 w-1/6 md:h-4" />
            <Skeleton class="size-3 md:size-4" />
            <Skeleton class="size-3 md:size-4" />
            <Skeleton class="size-3 md:size-4" />
          </div>
        </div>
      </div>
      <CardHeader class="gap-0">
        <Skeleton class="h-3 w-full max-w-56" />
        <div class="mt-4 flex w-full max-w-56 items-center gap-3">
          <Skeleton
            class="h-3 w-full"
            variant="secondary"
          />
          <Skeleton
            class="h-3 w-full"
            variant="secondary"
          />
        </div>
        <div class="mt-8 flex w-full max-w-56 items-center gap-3">
          <Skeleton class="h-3 w-full" />
          <Skeleton class="h-3 w-full" />
        </div>
      </CardHeader>
      <CardContent class="mt-8">
        <Skeleton class="h-3 w-36" />
        <div class="mt-7 space-y-5">
          <Skeleton
            class="h-3 w-full"
            variant="secondary"
          />
          <Skeleton
            class="h-3 w-full"
            variant="secondary"
          />
          <Skeleton
            class="h-3 w-full"
            variant="secondary"
          />
        </div>
        <Skeleton class="mt-8 h-3 w-36" />
        <ul class="mt-4 space-y-5 text-sm font-normal text-secondary">
          <li
            v-for="item in 3"
            :key="item"
            class="flex gap-2.5"
          >
            <Skeleton class="size-4" />
            <Skeleton class="h-4 w-20" />
          </li>
        </ul>
      </CardContent>
    </Card>

    <Card>
      <CardHeader class="gap-0">
        <Skeleton class="h-4 w-20" />
        <Skeleton class="mt-8 h-4 w-36" />
        <Skeleton
          class="mt-2 h-4 w-36"
          variant="secondary"
        />
      </CardHeader>
      <CardContent class="space-y-6">
        <Skeleton class="h-4 w-20" />
        <ul class="mt-5 space-y-5">
          <li
            v-for="item in 3"
            :key="item"
            class="flex justify-between gap-7"
          >
            <Skeleton
              class="h-3 w-full"
              variant="secondary"
            />
            <Skeleton class="h-3 w-full" />
          </li>
        </ul>
        <Skeleton class="mt-14 h-4 w-20" />
        <ul class="space-y-5">
          <li class="flex justify-between gap-7">
            <Skeleton
              class="h-3 w-full"
              variant="secondary"
            />
            <Skeleton class="h-3 w-full" />
          </li>
        </ul>
        <Skeleton
          class="h-3 w-1/2"
          variant="secondary"
        />
        <div
          class="mt-3 flex aspect-[2/1] items-center justify-center rounded-md border border-dashed border-primary"
        >
          <IconFolderOpen class="size-8 text-primary opacity-30" />
        </div>
        <Skeleton
          class="mt-3 h-3 w-1/2"
          variant="secondary"
        />
      </CardContent>
      <CardFooter>
        <Skeleton class="h-11 w-full rounded-md bg-primary" />
      </CardFooter>
    </Card>
  </div>
</template>
