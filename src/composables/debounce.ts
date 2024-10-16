import { ref, watch, type Ref } from 'vue';

export function useDebounce<T>(value: Ref<T>, ms = 200): Readonly<Ref<T>> {
  const debounced = ref(value.value as T) as Ref<T>;

  let debounceTimer: ReturnType<typeof setTimeout>;

  watch(value, newValue => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      debounced.value = newValue;
    }, ms);
  });

  return debounced;
}
