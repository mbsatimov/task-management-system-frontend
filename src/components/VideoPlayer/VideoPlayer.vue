<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';
import {
  IconPlay,
  IconPause,
  IconMaximize3,
  IconScreenMirroring,
  IconVolumeCross,
  IconVolumeHigh,
} from '@/components/Icons';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useVideoPlayer } from './useVideoPlayer';

const { src } = defineProps<{ src: string }>();

const { refs, state, functions } = useVideoPlayer();

const handleKeydown = (e: KeyboardEvent) => {
  switch (e.key.toLowerCase()) {
    case ' ':
      functions.togglePlayPause();
      break;
    case 'k':
      functions.togglePlayPause();
      break;
    case 'f':
      functions.toggleFullScreen();
      break;
    case 'i':
      functions.toggleMiniPlayer();
      break;
    case 'm':
      functions.toggleMute();
      break;
    case 'arrowleft':
    case 'j':
      functions.skip(-5);
      break;
    case 'arrowright':
    case 'l':
      functions.skip(5);
      break;
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown); // Attach the keydown event
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown); // Clean up event listener
});
</script>
<template>
  <div
    class="group relative"
    :ref="refs.videoContainerRef"
    @mouseup="state.isScrubbing.value && functions.toggleScrubbing($event)"
    @mousemove="state.isScrubbing.value && functions.onTimelineUpdate($event)"
  >
    <div
      :class="
        cn(
          'absolute bottom-4 left-4 right-4 z-10 flex h-10 items-center gap-3 rounded-md bg-white px-3 opacity-0 transition-opacity group-focus-within:opacity-100 group-hover:opacity-100 md:bottom-6 md:left-6 md:right-6 md:h-11 md:gap-10 md:px-6',
          { 'opacity-100': !state.isPlaying.value }
        )
      "
    >
      <div class="flex flex-1 items-center gap-2 md:gap-6">
        <Button
          v-if="state.isPlaying.value"
          class="size-4 md:size-5"
          size="iconSm"
          variant="ghost"
          @click="functions.togglePlayPause"
        >
          <IconPlay class="size-5" />
        </Button>
        <Button
          v-else
          class="size-4 md:size-5"
          size="iconSm"
          variant="ghost"
          @click="functions.togglePlayPause"
        >
          <IconPause class="size-5" />
        </Button>
        <div
          :ref="refs.timelineContainerRef"
          @mousedown="functions.toggleScrubbing"
          @mousemove="functions.onTimelineUpdate"
          class="relative h-1.5 flex-1 cursor-pointer rounded-md bg-muted md:h-2"
        >
          <div
            class="absolute bottom-0 left-0 top-0 z-20 h-full rounded-md bg-secondary"
            :style="{ width: state.progressPosition.value * 100 + '%' }"
          />
        </div>
        <div class="flex items-center text-xs md:text-sm">
          <div>{{ functions.formatDuration(state.currentTime.value) }}</div>
          /
          <div>{{ functions.formatDuration(state.totalTime.value) }}</div>
        </div>
      </div>

      <div class="flex gap-1.5 md:gap-3">
        <Button
          class="size-4 md:size-5"
          size="iconSm"
          variant="ghost"
          @click="functions.toggleFullScreen"
        >
          <IconMaximize3 class="size-5" />
        </Button>
        <Button
          class="size-4 md:size-5"
          size="iconSm"
          variant="ghost"
          @click="functions.toggleMiniPlayer"
        >
          <IconScreenMirroring class="size-5" />
        </Button>
        <Button
          v-if="state.isMuted.value"
          @click="functions.toggleMute"
          class="size-4 md:size-5"
          size="iconSm"
          variant="ghost"
        >
          <IconVolumeCross class="size-5" />
        </Button>
        <Button
          v-else
          @click="functions.toggleMute"
          class="size-4 md:size-5"
          size="iconSm"
          variant="ghost"
        >
          <IconVolumeHigh class="size-5" />
        </Button>
      </div>
    </div>
    <video
      :ref="refs.videoPlayerRef"
      @click="functions.togglePlayPause"
      @loadedmetadata="functions.onLoaded"
      @timeupdate="functions.onTimeUpdate"
      v-bind="$attrs"
      class="block w-full"
      :src="src"
    ></video>
  </div>
</template>
