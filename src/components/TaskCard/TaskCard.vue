<script setup lang="ts">
import { IconTimeCircle } from '@/components/Icons';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import type { Task } from '@/types/models/task';

const { task } = withDefaults(
  defineProps<{
    task: Task;
    withDetails?: boolean;
  }>(),
  {
    withDetails: false,
  }
);
</script>

<template>
  <Card>
    <CardHeader class="!pb-4">
      <RouterLink :to="`/task/${task.id}`">
        <img
          class="aspect-[5/2] rounded-md object-cover"
          :src="task.image"
          :alt="task.title"
        />
        <CardTitle class="mt-4">{{ task.title }}</CardTitle>
        <CardDescription>{{ task.direction }}</CardDescription>
      </RouterLink>
    </CardHeader>
    <CardContent>
      <div class="space-y-2">
        <div class="flex items-center justify-between">
          <p>Progress</p>
          <div class="text-base text-primary">{{ task.progress }}%</div>
        </div>
        <Progress :modelValue="task.progress" />
      </div>
      <div class="mt-4 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <IconTimeCircle class="text-secondary-400" />{{ task.duration }}
        </div>
        <div
          class="relative h-6"
          :style="{
            width: task.assignedTo.length * 16 + 'px',
          }"
        >
          <img
            v-for="(student, index) in task.assignedTo"
            class="absolute top-0 size-6 rounded-full border-[1.5px] border-white"
            :style="{
              left: `${index * 16}px`,
            }"
            :key="student.id"
            :src="student.avatar"
          />
        </div>
      </div>

      <div v-if="withDetails">
        <Separator class="my-8" />

        <div class="flex items-center justify-between">
          <h4 class="text-base font-semibold">Detail Task</h4>
          <p class="text-sm text-secondary-400">
            {{ task.direction }}
          </p>
        </div>

        <ul class="mt-5 space-y-5">
          <li
            v-for="(detail, index) in task.details"
            :key="detail"
            class="flex items-center gap-3"
          >
            <div
              class="flex size-9 shrink-0 items-center justify-center rounded-md bg-muted"
            >
              {{ index + 1 }}
            </div>
            <p class="text-sm">
              {{ detail }}
            </p>
          </li>
        </ul>
      </div>
    </CardContent>
    <CardFooter
      v-if="withDetails"
      class="pt-8"
    >
      <Button class="w-full">Go To Detail</Button>
    </CardFooter>
  </Card>
</template>
