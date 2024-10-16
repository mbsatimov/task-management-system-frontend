<script setup lang="ts">
import { useSidebarStore } from '@/stores/sidebar';
import SiteSidebarContent from './SiteSidebarContent.vue';
import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet';

const sidebar = useSidebarStore();
</script>
<template>
  <aside>
    <Sheet v-model:open="sidebar.open">
      <SheetContent
        class="w-fit p-0"
        side="left"
      >
        <SheetTitle class="sr-only">Sidebar</SheetTitle>
        <SiteSidebarContent />
      </SheetContent>
    </Sheet>

    <div class="hidden h-full lg:block">
      <SiteSidebarContent />
    </div>
  </aside>
</template>
