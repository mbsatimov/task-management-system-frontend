<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';
import { skeletonVariants, type SkeletonVariants } from '.';

interface Props {
  variant?: SkeletonVariants['variant'];
  class?: HTMLAttributes['class'];
}

const props = defineProps<Props>();
</script>

<template>
  <div :class="cn(skeletonVariants({ variant }), props.class)" />
</template>
