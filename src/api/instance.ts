import { useAuthStore } from '@/stores/auth';
import axios from 'axios';

const $api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

$api.interceptors.request.use(config => {
  const authStore = useAuthStore();
  const token = authStore.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

$api.interceptors.response.use(
  response => response,
  async error => {
    if (error.response?.status === 401) {
      const authStore = useAuthStore();
      await authStore.refresh();
      return $api(error.config);
    }
    return Promise.reject(error);
  }
);

export { $api };
