<script setup lang="ts">
import SiteSidebarContentMenu from './SiteSidebarContentMenu.vue';
import { Button } from '@/components/ui/button';
</script>

<template>
  <div class="flex h-full w-[252px] flex-col justify-between p-8">
    <div class="">
      <div class="flex gap-3">
        <img
          src="@/assets/logo.svg"
          alt="Logo"
        />
        <p class="inline-block text-[32px] font-semibold">DNX</p>
      </div>

      <div class="mt-[60px]">
        <SiteSidebarContentMenu />
      </div>
    </div>

    <div class="relative h-[250px] rounded-md bg-secondary p-4">
      <div
        class="absolute left-1/2 top-0 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-background bg-secondary text-[28px] font-bold text-background shadow-[0_0_20px_-5px_#000]"
      >
        ?
      </div>
      <div class="flex h-full flex-col">
        <div
          class="flex flex-1 flex-col justify-center text-center text-background"
        >
          <p class="text-base font-semibold">Help Center</p>
          <p class="mt-3 text-xs font-medium">
            Having Trouble in Learning. Please contact us for more questions.
          </p>
        </div>
        <Button
          class="w-full bg-background"
          variant="ghost"
          >Go To Help Center</Button
        >
      </div>
    </div>
  </div>
</template>
