<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import {
  SwitchRoot,
  type SwitchRootEmits,
  type SwitchRootProps,
  SwitchThumb,
  useForwardPropsEmits,
} from 'radix-vue';
import { cn } from '@/lib/utils';

const props = defineProps<
  SwitchRootProps & { class?: HTMLAttributes['class'] }
>();

const emits = defineEmits<SwitchRootEmits>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <SwitchRoot
    v-bind="forwarded"
    :class="
      cn(
        'peer inline-flex h-[30px] w-[55px] shrink-0 cursor-pointer items-center rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50',
        props.class
      )
    "
  >
    <SwitchThumb
      :class="
        cn(
          'pointer-events-none block size-5 rounded-full bg-muted shadow-lg ring-0 transition-all data-[state=checked]:translate-x-7 data-[state=unchecked]:translate-x-1 data-[state=checked]:bg-primary'
        )
      "
    />
  </SwitchRoot>
</template>
