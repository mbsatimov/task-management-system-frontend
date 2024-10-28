<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import {
  RadioGroupIndicator,
  RadioGroupItem,
  type RadioGroupItemProps,
  useForwardProps,
} from 'radix-vue';
import { cn } from '@/lib/utils';

const props = defineProps<
  RadioGroupItemProps & { class?: HTMLAttributes['class'] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <RadioGroupItem
    v-bind="forwardedProps"
    :class="
      cn(
        'relative aspect-square size-5 rounded-full border-2 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        props.class
      )
    "
  >
    <RadioGroupIndicator
      class="absolute inset-0 rounded-full border-4 border-primary"
    >
    </RadioGroupIndicator>
  </RadioGroupItem>
</template>
