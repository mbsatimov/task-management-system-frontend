<script setup lang="ts">
import type { WithClassAsProps } from './interface';
import { Button } from '@/components/ui/button';
import { IconArrowLeft } from '@/components/Icons';
import { cn } from '@/lib/utils';
import { useCarousel } from './useCarousel';

const props = defineProps<WithClassAsProps>();

const { canScrollPrev, scrollPrev } = useCarousel();
</script>

<template>
  <Button
    :disabled="!canScrollPrev"
    :class="cn('h-8 w-8 touch-manipulation rounded-full p-0', props.class)"
    variant="ghost"
    @click="scrollPrev"
  >
    <slot>
      <IconArrowLeft class="size-6" />
      <span class="sr-only">Previous Slide</span>
    </slot>
  </Button>
</template>
