<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { TabsContent, type TabsContentProps } from 'radix-vue';
import { cn } from '@/lib/utils';

const props = defineProps<
  TabsContentProps & { class?: HTMLAttributes['class'] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <TabsContent
    :class="cn('mt-6 focus-visible:outline-none md:mt-8', props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </TabsContent>
</template>
