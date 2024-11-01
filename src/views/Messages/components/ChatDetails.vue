<script setup lang="ts">
import {
  format,
  isToday,
  differenceInMinutes,
  differenceInDays,
} from 'date-fns';
import { useRoute } from 'vue-router';
import { watch } from 'vue';
import { ref } from 'vue';
import {
  IconArrowLeft,
  IconVideoCall,
  IconVoiceCall,
  IconAttachCircle,
  IconSend2,
} from '@/components/Icons';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useMessageStore } from '@/stores/message';
import { useChatStore } from '@/stores/chat';
import type { MessageRequest } from '@/types/models/message';
import ChatDetailsSkeleton from './ChatDetailsSkeleton.vue';
import { Loader2Icon } from 'lucide-vue-next';

const route = useRoute();

const messageStore = useMessageStore();
const chatStore = useChatStore();

const messages = messageStore.messages;
const chat = chatStore.currentChat;

const currentMessage = ref<MessageRequest>({
  text: '',
  image: null,
});

const getMessages = () => {
  const chatId = Number(route.query.chat);
  if (!chatId) return;
  messageStore.getMessages(chatId);
};

const getChat = () => {
  const chatId = Number(route.query.chat);
  if (!chatId) return;
  chatStore.getChat(chatId);
};

getMessages();
getChat();

const chatWindowRef = ref<HTMLDivElement | null>(null);

function scrollToBottom() {
  if (chatWindowRef.value) {
    chatWindowRef.value.scrollTop = chatWindowRef.value.scrollHeight;
  }
}

watch(
  () => route.query.chat,
  () => {
    getMessages();
    getChat();
  }
);

watch(
  () => messages.isLoading,
  () => {
    setTimeout(() => {
      scrollToBottom();
    }, 0);
  }
);

const onImageChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files) {
  }
};

const onSendMessage = () => {
  if (!route.query.chat || currentMessage.value.text?.trim() === '') return;
  messageStore.postMessage(Number(route.query.chat), currentMessage.value);
  currentMessage.value = {
    text: '',
    image: null,
  };
  getMessages();
};
</script>
<template>
  <div
    v-if="$route.query.chat"
    class="fixed inset-0 z-50 flex flex-1 flex-col bg-[#FAFAFA] md:static"
  >
    <ChatDetailsSkeleton v-if="chat.isLoading" />
    <header
      v-if="!chat.isLoading && chat.data"
      class="flex h-[100px] items-center gap-4 rounded-md bg-white px-6 py-2.5 md:px-12"
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
        <img
          :src="chat.data.user.avatar ?? '/avatar.png'"
          alt=""
          class="size-12 rounded-full"
        />
        <div class="text-gray-900 text-sm font-medium">
          <h4 class="text-sm font-semibold">
            {{ chat.data.user.firstName + ' ' + chat.data.user.lastName }}
          </h4>
          <div class="flex items-center gap-2">
            <div
              class="m-[5px] size-2 animate-pulse rounded-full bg-[#25C78B] delay-1000"
            />
            <p class="text-xs">
              {{ format(chat.data.lastMessage.createdAt, 'HH:mm') }}
            </p>
          </div>
        </div>
      </div>
      <div class="flex gap-4">
        <Button
          class="rounded-full"
          variant="outline"
          size="icon"
        >
          <IconVideoCall />
        </Button>
        <Button
          class="rounded-full"
          variant="outline"
          size="icon"
        >
          <IconVoiceCall />
        </Button>
      </div>
    </header>

    <main
      v-if="!chat.isLoading && chat.data"
      ref="chatWindowRef"
      class="grid flex-1 items-end overflow-y-auto pb-9"
    >
      <div>
        <div
          v-for="(message, index) in messages.data"
          :key="message.id"
        >
          <div
            :class="
              cn(
                'mt-2 flex flex-col px-6',
                message.user.id === 1 ? 'items-end' : 'items-start'
              )
            "
          >
            <div
              :class="
                cn(
                  'w-fit max-w-[400px] rounded-b-md px-3 py-2 shadow-[0px_1px_3px_0px_#546FFF1A]',
                  message.user.id === 1
                    ? 'ml-6 rounded-tl-md bg-primary text-white'
                    : 'mr-6 rounded-tr-md bg-white'
                )
              "
            >
              <img
                v-if="message.image"
                :src="message.image"
                class="h-40 w-full rounded-sm object-cover"
                alt=""
              />
              <p>{{ message.text }}</p>
            </div>
            <p
              v-if="
                messages.data.length === index + 1 ||
                !(
                  messages.data.length > index + 1 &&
                  !differenceInMinutes(
                    message.createdAt,
                    messages.data[index + 1].createdAt
                  ) &&
                  message.user.id === 1
                )
              "
              class="mt-2.5 text-end text-xs font-normal text-secondary-300"
            >
              {{
                isToday(message.createdAt)
                  ? 'Today'
                  : format(message.createdAt, 'dd MMMM')
              }},
              {{ format(message.createdAt, 'HH:mm') }}
            </p>
          </div>
          <div
            v-if="
              messages.data.length > index + 1 &&
              differenceInDays(
                message.createdAt,
                messages.data[index + 1].createdAt
              )
            "
            class="mx-auto mt-6 w-fit rounded-md bg-secondary px-3 py-2 text-sm font-semibold text-white"
          >
            {{ format(message.createdAt, 'dd MMMM') }}
          </div>
          <div
            v-if="
              messages.data.length > index + 1 &&
              message.isRead &&
              !messages.data[index + 1].isRead
            "
            class="my-3 bg-secondary-100 text-center text-xs"
          >
            New messages
          </div>
        </div>
      </div>
    </main>

    <footer class="flex h-[72px] items-center gap-4 bg-white px-6">
      <input
        class="flex-1 outline-none placeholder:text-secondary-300"
        placeholder="Send your message…"
        v-model="currentMessage.text"
        @keydown.enter="onSendMessage"
      />
      <Button
        variant="ghost"
        size="icon"
      >
        <IconAttachCircle />
        <input
          type="file"
          hidden
          accept="image/*"
          @change="onImageChange"
        />
      </Button>
      <Button
        size="icon"
        @click="onSendMessage"
      >
        <Loader2Icon
          v-if="messageStore.isSubmitting || messages.isLoading"
          class="animate-spin"
        />
        <IconSend2 v-else />
      </Button>
    </footer>
  </div>
</template>
