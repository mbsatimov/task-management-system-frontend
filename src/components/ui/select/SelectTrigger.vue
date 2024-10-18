<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import {
  SelectIcon,
  SelectTrigger,
  type SelectTriggerProps,
  useForwardProps,
} from 'radix-vue';
import { cn } from '@/lib/utils';
import { IconArrowDown } from '@/components/Icons';

const props = withDefaults(
  defineProps<
    SelectTriggerProps & {
      class?: HTMLAttributes['class'];
      withArrow?: boolean;
    }
  >(),
  {
    withArrow: true,
  }
);

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <SelectTrigger
    v-bind="forwardedProps"
    :class="
      cn(
        'flex h-[52px] w-full items-center justify-between gap-2 rounded-md border border-input bg-background px-8 py-2 text-start text-xs font-semibold ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate [&>svg]:text-secondary-300',
        props.class
      )
    "
  >
    <slot />
    <SelectIcon
      as-child
      v-if="withArrow"
    >
      <IconArrowDown class="h-4 w-4 shrink-0 opacity-50" />
    </SelectIcon>
  </SelectTrigger>
</template>
