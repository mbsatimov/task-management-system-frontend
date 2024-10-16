import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useSidebarStore = defineStore('sidebar', () => {
  const open = ref(false);

  function toggle() {
    open.value = !open.value;
  }
  return { open, toggle };
});
