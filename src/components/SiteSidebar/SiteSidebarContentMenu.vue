<script setup lang="ts">
import type { NavItem } from '@/types/nav';
import SiteSidebarContentMenuItem from './SiteSidebarContentMenuItem.vue';
import {
  IconCategory2,
  IconBook,
  IconUserOctagon,
  IconMessage,
  IconSettings,
} from '@/components/Icons';

const items: NavItem[] = [
  {
    title: 'Overview',
    href: '/',
    icon: IconCategory2,
  },
  {
    title: 'Task',
    href: '/task',
    icon: IconBook,
  },
  {
    title: 'Mentors',
    href: '/mentors',
    icon: IconUserOctagon,
  },
  {
    title: 'Messages',
    href: '/messages',
    icon: IconMessage,
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: IconSettings,
  },
];
</script>
<template>
  <nav class="space-y-6">
    <SiteSidebarContentMenuItem
      v-for="item in items"
      :key="item.title"
      :item="item"
    />
  </nav>
</template>
