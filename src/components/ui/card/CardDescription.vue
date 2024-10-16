<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';

const props = defineProps<{
  class?: HTMLAttributes['class'];
}>();
</script>

<template>
  <p :class="cn('text-xs font-medium text-secondary-400', props.class)">
    <slot />
  </p>
</template>
