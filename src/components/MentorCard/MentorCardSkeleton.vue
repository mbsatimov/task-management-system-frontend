<script setup lang="ts">
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { IconProfile } from '@/components/Icons';
import { Skeleton } from '../ui/skeleton';

defineProps<{
  withAbout?: boolean;
}>();
</script>

<template>
  <Card>
    <CardHeader class="flex-row items-center gap-2">
      <div
        class="flex size-12 items-center justify-center rounded-full border border-secondary-300"
      >
        <IconProfile class="text-secondary-300" />
      </div>
      <div class="flex-1 space-y-2">
        <Skeleton class="h-3 w-[100px]" />
        <Skeleton
          class="h-3 w-[100px]"
          variant="secondary"
        />
      </div>
      <Skeleton class="h-4 w-20" />
    </CardHeader>
    <CardContent v-if="withAbout">
      <div class="space-y-3">
        <Skeleton class="h-3 w-full" />
        <Skeleton class="h-3 w-full" />
      </div>
    </CardContent>
    <CardFooter class="justify-between">
      <div class="flex items-center gap-2">
        <Skeleton class="size-4" />
        <Skeleton class="h-4 w-20" />
      </div>
      <div class="flex items-center gap-2">
        <Skeleton class="size-4" />
        <Skeleton class="h-4 w-20" />
      </div>
    </CardFooter>
  </Card>
</template>
