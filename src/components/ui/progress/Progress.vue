<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import {
  ProgressIndicator,
  ProgressRoot,
  type ProgressRootProps,
} from 'radix-vue';
import { cn } from '@/lib/utils';

const props = withDefaults(
  defineProps<ProgressRootProps & { class?: HTMLAttributes['class'] }>(),
  {
    modelValue: 0,
  }
);

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <ProgressRoot
    v-bind="delegatedProps"
    :class="cn('relative h-2 w-full', props.class)"
  >
    <div class="h-full overflow-hidden rounded-full bg-primary-200">
      <ProgressIndicator
        class="h-full w-full flex-1 bg-primary transition-all"
        :style="`transform: translateX(-${100 - (props.modelValue ?? 0)}%);`"
      />
    </div>
    <div
      class="absolute top-1/2 z-10 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-primary transition-all"
      :style="`left: ${props.modelValue ?? 0}%`"
    />
  </ProgressRoot>
</template>
