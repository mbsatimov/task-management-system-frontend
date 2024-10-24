<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Mentor } from '@/types/models/mentor';
import { IconNote2, IconStar1 } from '@/components/Icons';

const { mentor, withAbout } = defineProps<{
  mentor: Mentor;
  withAbout?: boolean;
}>();
</script>

<template>
  <Card>
    <CardHeader class="flex-row items-center gap-2">
      <Avatar class="size-12">
        <AvatarImage :src="mentor.avatar" />
        <AvatarFallback>{{
          mentor.firstName.charAt(0) + mentor.lastName.charAt(0)
        }}</AvatarFallback>
      </Avatar>
      <div class="flex-1">
        <CardTitle>{{ `${mentor.firstName} ${mentor.lastName}` }}</CardTitle>
        <CardDescription>{{ mentor.jobTitle }}</CardDescription>
      </div>
      <Button
        class="text-sm"
        variant="link"
        >+Follow</Button
      >
    </CardHeader>
    <CardContent v-if="withAbout">
      <p class="line-clamp-2 text-sm leading-7 text-secondary-300">
        {{ mentor.about }}
      </p>
    </CardContent>
    <CardFooter class="justify-between">
      <div class="flex items-center gap-2 text-sm font-medium">
        <IconNote2 class="text-secondary-400" />
        {{ mentor.tasks }}
        Task
      </div>
      <div class="flex items-center gap-2 text-sm font-medium">
        <IconStar1 />
        {{ mentor.rating }}
        ({{ mentor.reviews }} Reviews)
      </div>
    </CardFooter>
  </Card>
</template>
