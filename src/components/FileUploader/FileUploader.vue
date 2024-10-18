<script setup lang="ts">
import { useTemplateRef, type HTMLAttributes } from 'vue';
import { IconFolderOpen } from '@/components/Icons';
import { cn } from '@/lib/utils';

const props = defineProps<{
  value?: File;
  onValueChange: (value: File) => void;
  class?: HTMLAttributes['class'];
}>();

const inputRef = useTemplateRef('inputRef');

const selectFile = () => {
  inputRef.value?.click();
};

const onFileSelect = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (!file) {
    return;
  }
  props.onValueChange?.(file);
};
</script>
<template>
  <button
    :class="
      cn(
        'flex w-full items-center justify-center rounded-md border-2 border-dashed border-primary',
        props.class
      )
    "
    @click="selectFile"
  >
    <IconFolderOpen class="size-8 text-primary opacity-[28%]" />
    <input
      hidden
      type="file"
      ref="inputRef"
      @change="onFileSelect"
    />
  </button>
</template>
