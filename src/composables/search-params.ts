import { useRoute, useRouter } from 'vue-router';

export function useSearchParams() {
  const route = useRoute();
  const router = useRouter();

  // Get a specific query param
  const getParam = (paramName: string) => {
    return (route.query[paramName] as string) || null;
  };

  // Set or update a query param
  const setParam = (paramName: string, paramValue: string) => {
    router.push({
      query: {
        ...route.query,
        [paramName]: paramValue || undefined,
      },
    });
  };

  // Clear a specific query param
  const clearParam = (paramName?: string | string[]) => {
    if (typeof paramName === 'string') {
      router.push({
        query: {
          ...route.query,
          [paramName]: null,
        },
      });
    } else if (Array.isArray(paramName)) {
      paramName.forEach(param => {
        router.push({
          query: {
            ...route.query,
            [param]: undefined,
          },
        });
      });
    } else {
      router.push({ query: {} });
    }
  };

  // Return the methods to be used in a component
  return {
    getParam,
    setParam,
    clearParam,
  };
}
