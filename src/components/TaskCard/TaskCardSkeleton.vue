<script setup lang="ts">
import { IconGallery } from '@/components/Icons';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';

defineProps<{
  withDetails?: boolean;
}>();
</script>

<template>
  <Card>
    <CardHeader class="space-y-5">
      <div
        class="flex aspect-[5/2] items-center justify-center rounded-md border"
      >
        <IconGallery class="size-10 text-primary/40" />
      </div>
      <div class="space-y-2">
        <Skeleton class="h-3 w-[148px]" />
        <Skeleton
          class="h-3 w-[148px]"
          variant="secondary"
        />
      </div>
    </CardHeader>
    <CardContent>
      <div class="space-y-2">
        <div class="flex items-center justify-between">
          <Skeleton class="h-4 w-20" />
          <Skeleton class="size-4" />
        </div>
        <Progress :modelValue="70" />
      </div>
      <div class="mt-4 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <Skeleton class="size-4" />
          <Skeleton class="h-4 w-20" />
        </div>
        <Skeleton class="h-4 w-20" />
      </div>

      <div v-if="withDetails">
        <Separator class="my-8" />

        <div class="flex items-center justify-between">
          <Skeleton class="h-3 w-20" />
          <Skeleton
            class="h-3 w-20"
            variant="secondary"
          />
        </div>

        <ul class="mt-5 space-y-5">
          <li
            v-for="detail in 3"
            :key="detail"
            class="flex items-center gap-3"
          >
            <Skeleton
              class="size-9 rounded-md"
              variant="secondary"
            />
            <Skeleton class="h-3 w-[90%]" />
          </li>
        </ul>
      </div>
    </CardContent>
    <CardFooter
      v-if="withDetails"
      class="pt-8"
    >
      <Skeleton class="h-11 w-full rounded-md bg-primary" />
    </CardFooter>
  </Card>
</template>
