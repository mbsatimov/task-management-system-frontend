import { ref } from 'vue';

export const useVideoPlayer = () => {
  const videoContainerRef = ref<HTMLElement | null>(null);
  const videoPlayerRef = ref<HTMLVideoElement | null>(null);
  const timelineContainerRef = ref<HTMLElement | null>(null);

  const isPlaying = ref(false);
  const isFullScreen = ref(false);
  const isMiniPlayer = ref(false);
  const isMuted = ref(false);
  const currentTime = ref(0);
  const totalTime = ref(0);
  const progressPosition = ref(0);

  const onLoaded = () => {
    videoPlayerRef.value?.focus();
    if (!videoPlayerRef.value) return;
    totalTime.value = videoPlayerRef.value.duration;
  };

  const togglePlayPause = () => {
    if (isPlaying.value) {
      videoPlayerRef.value?.pause();
    } else {
      videoPlayerRef.value?.play();
    }
    isPlaying.value = !isPlaying.value;
  };

  const skip = (seconds: number) => {
    if (!videoPlayerRef.value) return;
    videoPlayerRef.value.currentTime += seconds;
  };
  const isScrubbing = ref(false);
  const wasPaused = ref(false);

  function toggleScrubbing(e: MouseEvent) {
    const rect = timelineContainerRef.value?.getBoundingClientRect();
    if (!videoPlayerRef.value || !rect) return;

    const percent =
      Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width;
    isScrubbing.value = (e.buttons & 1) === 1;
    if (isScrubbing.value) {
      wasPaused.value = videoPlayerRef.value.paused;
      videoPlayerRef.value.pause();
    } else {
      videoPlayerRef.value.currentTime =
        percent * videoPlayerRef.value.duration;
      if (!wasPaused.value) videoPlayerRef.value.play();
    }

    onTimelineUpdate(e);
  }

  const onTimelineUpdate = (event: MouseEvent) => {
    if (!videoPlayerRef.value) return;
    const rect = timelineContainerRef.value?.getBoundingClientRect();
    if (!rect) return;
    const precent =
      Math.min(Math.max(0, event.x - rect?.x), rect?.width) / rect?.width;

    if (isScrubbing.value) {
      event.preventDefault();
      videoPlayerRef.value.currentTime =
        precent * videoPlayerRef.value.duration;
      progressPosition.value = precent;
    }
  };

  const toggleFullScreen = () => {
    if (!isFullScreen.value) {
      videoContainerRef.value?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    isFullScreen.value = !isFullScreen.value;
  };

  const toggleMiniPlayer = () => {
    if (isMiniPlayer.value) {
      document.exitPictureInPicture();
    } else {
      videoPlayerRef.value?.requestPictureInPicture();
    }
    isMiniPlayer.value = !isMiniPlayer.value;
  };

  const toggleMute = () => {
    if (videoPlayerRef.value) {
      videoPlayerRef.value.muted = !videoPlayerRef.value.muted;
    }
    isMuted.value = !isMuted.value;
  };

  const onTimeUpdate = () => {
    if (!videoPlayerRef.value) return;
    currentTime.value = videoPlayerRef.value.currentTime;
    progressPosition.value =
      videoPlayerRef.value.currentTime / videoPlayerRef.value.duration;
  };

  const leadingZero = new Intl.NumberFormat(undefined, {
    minimumIntegerDigits: 2,
  });

  const formatDuration = (time: number) => {
    const seconds = Math.floor(time % 60);
    const minutes = Math.floor(time / 60) % 60;
    const hours = Math.floor(time / 3600);
    if (hours === 0) {
      return `${minutes}:${leadingZero.format(seconds)}`;
    } else {
      return `${hours}:${leadingZero.format(minutes)}:${leadingZero.format(seconds)}`;
    }
  };

  return {
    refs: {
      videoContainerRef,
      videoPlayerRef,
      timelineContainerRef,
    },
    state: {
      videoContainerRef,
      videoPlayerRef,
      isPlaying,
      isScrubbing,
      progressPosition,
      isFullScreen,
      isMiniPlayer,
      isMuted,
      currentTime,
      totalTime,
    },
    functions: {
      onLoaded,
      togglePlayPause,
      toggleScrubbing,
      onTimelineUpdate,
      skip,
      toggleFullScreen,
      toggleMiniPlayer,
      toggleMute,
      onTimeUpdate,
      formatDuration,
    },
  };
};
