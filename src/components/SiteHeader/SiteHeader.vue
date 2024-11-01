<script setup lang="ts">
import { IconMenu, IconNotification } from '@/components/Icons';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuthStore } from '@/stores/auth';
import { useSidebarStore } from '@/stores/sidebar';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();
const sidebar = useSidebarStore();
const logout = () => {
  router.push('/login');
  authStore.logout();
};
</script>
<template>
  <header class="px-6 py-8 lg:px-8">
    <div class="flex items-center justify-between">
      <Button
        class="rounded-full lg:hidden"
        variant="outline"
        size="icon"
        @click="sidebar.toggle"
      >
        <IconMenu />
      </Button>

      <div class="hidden space-y-2 lg:block">
        <slot name="title" />
      </div>

      <div class="flex items-center gap-4 lg:gap-6">
        <Button
          class="rounded-full lg:size-[52px]"
          variant="outline"
          size="icon"
        >
          <IconNotification class="size-5 lg:size-6" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar
              size="sm"
              class="lg:size-[52px]"
            >
              <AvatarImage
                :src="authStore.user?.avatar || ''"
                alt="@radix-vue"
              />
              <AvatarFallback>{{
                `${authStore.user?.firstName.substring(0, 1)}${authStore.user?.lastName.substring(0, 1)}`
              }}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem @click="logout()">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
    <div class="mt-8 lg:hidden">
      <slot name="title" />
    </div>

    <slot name="actions" />
  </header>
</template>
