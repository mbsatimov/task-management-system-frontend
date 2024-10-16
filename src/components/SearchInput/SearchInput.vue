<script setup lang="ts">
import { watch, ref } from 'vue';
import { IconSearch } from '@/components/Icons';
import { Input } from '@/components/ui/input';
import { useDebounce } from '@/composables/debounce';
import { useSearchParams } from '@/composables/search-params';

const { getParam, setParam } = useSearchParams();

const input = ref(getParam('q') || '');
const debounced = useDebounce(input, 1000);

watch(debounced, value => {
  setParam('q', value);
});
</script>
<template>
  <div class="relative max-w-[480px]">
    <Input
      v-bind="$attrs"
      class="w-full"
      v-model="input"
    />
    <IconSearch
      class="text-gray-400 absolute right-7 top-1/2 -translate-y-1/2 text-secondary-300"
    />
  </div>
</template>
