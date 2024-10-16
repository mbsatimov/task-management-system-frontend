<script setup lang="ts">
import { ref, type HTMLAttributes, computed } from 'vue';
import { cn } from '@/lib/utils';

const props = defineProps<{
  class?: HTMLAttributes['class'];
  progress: number;
}>();

const radius = ref(45);
const circumference = computed(() => 2 * Math.PI * radius.value);

const dashOffset = computed(() => {
  return circumference.value - (circumference.value * props.progress) / 100;
});
</script>

<template>
  <div class="relative inline-block size-[68px]">
    <svg
      :class="cn('-rotate-90', props.class)"
      viewBox="0 0 100 100"
    >
      <!-- Background Circle -->
      <circle
        class="opacity-10"
        :cx="50"
        :cy="50"
        :r="radius"
        fill="none"
        stroke="#546FFF"
        stroke-width="3"
      />

      <!-- Progress Circle -->
      <circle
        class="origin-center"
        :cx="50"
        :cy="50"
        :r="radius"
        fill="none"
        stroke="#546FFF"
        stroke-width="3"
        stroke-linecap="round"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="dashOffset"
        :style="{ transition: 'stroke-dashoffset 0.5s ease' }"
      />
    </svg>
    <div
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[18px] font-medium"
    >
      {{ progress }}%
    </div>
  </div>
</template>
