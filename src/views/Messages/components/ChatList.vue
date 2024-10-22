<script setup lang="ts">
import { format } from 'date-fns';
import { ref } from 'vue';
import { IconSearch } from '@/components/Icons';
import { Input } from '@/components/ui/input';
import { IconDoneAll } from '@/components/Icons';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { chats } from '../data.ts';

const input = ref('');
</script>
<template>
  <div class="w-full border-x bg-white p-6 md:max-w-[400px]">
    <div class="relative">
      <Input
        class="w-full placeholder:text-secondary-300"
        v-model="input"
        placeholder="Search Name"
      />
      <IconSearch
        class="text-gray-400 absolute right-7 top-1/2 -translate-y-1/2"
      />
    </div>
    <ul class="mt-8">
      <li
        v-for="chat in chats"
        :key="chat.id"
        class="divide-y-2"
      >
        <RouterLink :to="`/messages?chat=${chat.id}`">
          <div
            :class="
              cn(
                'flex items-center gap-3 rounded-md px-5 py-2.5 transition-all hover:bg-muted',
                {
                  'bg-muted': $route.query.chat === String(chat.id),
                }
              )
            "
          >
            <img
              :src="chat.user.avatar ?? '/avatar.png'"
              alt=""
              class="size-12 rounded-full"
            />
            <div class="flex-1 space-y-2 overflow-hidden">
              <div
                class="text-gray-900 flex items-center justify-between text-sm font-medium"
              >
                <h4 class="text-sm font-semibold">
                  {{ chat.user.firstName + ' ' + chat.user.lastName }}
                </h4>
                <p class="text-xs font-normal text-secondary-300">
                  {{ format(chat.lastMessage.createdAt, 'HH:mm') }}
                </p>
              </div>
              <div class="text-gray-500 flex items-center gap-9 text-sm">
                <p
                  :class="
                    cn('flex-1 overflow-hidden truncate text-xs font-normal', {
                      'text-secondary-300': !chat.unreadedMessagesCount,
                    })
                  "
                >
                  {{ chat.lastMessage.text }}
                </p>
                <span>
                  <IconDoneAll
                    v-if="!chat.unreadedMessagesCount"
                    class="text-[#04A4F4]"
                  />
                  <div
                    v-else
                    class="m-[5px] size-2 animate-pulse rounded-full bg-[#DB5962] delay-1000"
                  />
                </span>
              </div>
            </div>
          </div>
        </RouterLink>
        <Separator class="my-4 border-0" />
      </li>
    </ul>
  </div>
</template>
