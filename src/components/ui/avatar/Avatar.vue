<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { AvatarRoot } from 'radix-vue';
import { type AvatarVariants, avatarVariant } from '.';
import { cn } from '@/lib/utils';

const props = defineProps<{
  class?: HTMLAttributes['class'];
  size?: AvatarVariants['size'];
  shape?: AvatarVariants['shape'];
}>();
</script>

<template>
  <AvatarRoot :class="cn(avatarVariant({ size, shape }), props.class)">
    <slot />
  </AvatarRoot>
</template>
