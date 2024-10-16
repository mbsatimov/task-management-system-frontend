<script setup lang="ts">
import { IconTimeCircle } from '@/components/Icons';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import type { Task } from '@/types/models/task';

const { task } = defineProps<{
  task: Task;
}>();
</script>

<template>
  <Card>
    <CardHeader>
      <img
        class="aspect-video rounded-md object-cover"
        :src="task.image"
        :alt="task.title"
      />
      <CardTitle class="mt-4">{{ task.title }}</CardTitle>
      <CardDescription>{{ task.direction }}</CardDescription>
    </CardHeader>
    <CardContent>
      <div class="space-y-2">
        <div class="flex items-center justify-between">
          <p class="font-medium">Progress</p>
          <div class="text-base font-medium text-primary">
            {{ task.progress }}%
          </div>
        </div>
        <Progress :modelValue="task.progress" />
      </div>
      <div class="mt-4 flex items-center justify-between">
        <div class="flex items-center gap-2 font-medium">
          <IconTimeCircle />{{ task.duration }}
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
    </CardContent>
  </Card>
</template>
