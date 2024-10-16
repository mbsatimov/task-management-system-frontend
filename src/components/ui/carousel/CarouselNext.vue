<script setup lang="ts">
import type { WithClassAsProps } from './interface';
import { Button } from '@/components/ui/button';
import { IconArrowRight } from '@/components/Icons';
import { cn } from '@/lib/utils';
import { useCarousel } from './useCarousel';

const props = defineProps<WithClassAsProps>();

const { canScrollNext, scrollNext } = useCarousel();
</script>

<template>
  <Button
    :disabled="!canScrollNext"
    :class="cn('h-8 w-8 touch-manipulation rounded-full p-0', props.class)"
    variant="ghost"
    @click="scrollNext"
  >
    <slot>
      <IconArrowRight class="size-6" />
      <span class="sr-only">Next Slide</span>
    </slot>
  </Button>
</template>
