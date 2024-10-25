<script setup lang="ts">
import { IconArrowLeft, IconProfile, IconGallery } from '@/components/Icons';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { onMounted } from 'vue';
import { ref } from 'vue';

const loadingWindowRef = ref<HTMLDivElement | null>(null);

function scrollToBottom() {
  if (loadingWindowRef.value) {
    loadingWindowRef.value.scrollTop = loadingWindowRef.value.scrollHeight;
  }
}

onMounted(() => {
  scrollToBottom();
});
</script>
<template>
  <header
    class="flex h-[100px] items-center gap-4 rounded-md bg-white px-6 py-2.5 transition-all md:px-12"
  >
    <Button
      class="md:hidden"
      variant="ghost"
      size="iconSm"
      asChild
    >
      <RouterLink to="/messages">
        <IconArrowLeft class="size-5" />
      </RouterLink>
    </Button>
    <div class="flex flex-1 items-center gap-3 overflow-hidden">
      <div
        class="flex size-12 items-center justify-center rounded-full border border-secondary-300"
      >
        <IconProfile class="text-secondary-300" />
      </div>
      <div class="space-y-2">
        <Skeleton class="h-3 w-[100px]" />
        <Skeleton
          class="h-3 w-[100px]"
          variant="secondary"
        />
      </div>
    </div>
    <div class="flex gap-4">
      <Skeleton class="size-4" />
      <Skeleton class="size-4" />
    </div>
  </header>

  <main
    ref="loadingWindowRef"
    class="grid flex-1 items-end overflow-y-auto pb-9"
  >
    <div>
      <Skeleton class="mx-auto mt-6 h-9 w-16 rounded-md" />
      <div
        class="ml-auto mt-10 flex w-full max-w-[300px] flex-col items-end space-y-3 px-6"
      >
        <Skeleton class="h-3 w-full" />
        <Skeleton class="h-3 w-full" />
        <Skeleton class="h-3 w-20" />
      </div>
      <div
        class="mr-auto mt-10 flex w-full max-w-[300px] flex-col space-y-3 px-6"
      >
        <Skeleton
          class="h-3 w-full"
          variant="secondary"
        />
        <Skeleton
          class="h-3 w-full"
          variant="secondary"
        />
        <Skeleton
          class="h-3 w-20"
          variant="secondary"
        />
      </div>
      <div
        class="ml-auto mt-10 flex w-full max-w-[300px] flex-col items-end space-y-3 px-6"
      >
        <Skeleton class="h-40 w-full">
          <IconGallery class="text-white" />
        </Skeleton>
        <Skeleton class="h-3 w-full" />
        <Skeleton class="h-3 w-20" />
      </div>
      <div
        class="mr-auto mt-10 flex w-full max-w-[300px] flex-col space-y-3 px-6"
      >
        <Skeleton
          class="h-3 w-full"
          variant="secondary"
        />
        <Skeleton
          class="h-3 w-full"
          variant="secondary"
        />
        <Skeleton
          class="h-3 w-20"
          variant="secondary"
        />
      </div>
    </div>
  </main>
</template>
