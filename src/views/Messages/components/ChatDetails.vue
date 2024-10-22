<script setup lang="ts">
import { format } from 'date-fns';
import { chats } from '../data';
import { useRoute } from 'vue-router';
import { watch } from 'vue';
import { ref } from 'vue';
import { IconArrowLeft } from '@/components/Icons';
import { Button } from '@/components/ui/button';

const route = useRoute();
const chat = ref(chats.find(chat => String(chat.id) === route.query.chat));
watch(
  () => route.query.chat,
  () => {
    chat.value = chats.find(chat => String(chat.id) === route.query.chat);
  }
);
</script>
<template>
  <div
    v-if="chat"
    class="fixed inset-0 z-50 flex-1 overflow-y-auto bg-background transition-all md:static"
  >
    <div
      class="flex h-[100px] items-center gap-3 rounded-md bg-white px-6 py-2.5 transition-all md:px-12"
    >
      <Button
        variant="ghost"
        size="iconSm"
        asChild
      >
        <RouterLink to="/messages">
          <IconArrowLeft class="size-5 md:hidden" />
        </RouterLink>
      </Button>
      <img
        :src="chat.user.avatar ?? '/avatar.png'"
        alt=""
        class="size-12 rounded-full"
      />
      <div class="flex-1 space-y-2 overflow-hidden">
        <div class="text-gray-900 space-y-2 text-sm font-medium">
          <h4 class="text-sm font-semibold">
            {{ chat.user.firstName + ' ' + chat.user.lastName }}
          </h4>
          <div class="flex items-center gap-2">
            <div
              class="m-[5px] size-2 animate-pulse rounded-full bg-[#25C78B] delay-1000"
            />
            <p class="text-xs">
              {{ format(chat.lastMessage.createdAt, 'HH:mm') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
