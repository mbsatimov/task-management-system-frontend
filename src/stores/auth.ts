import { AuthService } from '@/api/requests/auth';
import type { LoginRequest } from '@/types/models/auth';
import type { User } from '@/types/models/user';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null);
  const token = ref<string | null>();
  const errors = ref<string[] | null>(null);

  const login = async (requestConfig: AxiosRequestConfig<LoginRequest>) => {
    try {
      const { data, success } = await AuthService.postLogin(requestConfig);
      if (success) {
        user.value = data.data.user;
        token.value = data.data.token;
      }
    } catch (error: any) {
      user.value = null;
      token.value = null;
      errors.value = error.errors;
    }
  };

  const logout = () => {
    user.value = null;
    token.value = null;
    errors.value = null;
  };

  const refresh = async () => {
    try {
      const { data } = await AuthService.getRefresh();
      setTimeout(() => {
        user.value = data.data.user;
        token.value = data.data.token;
        errors.value = null;
      }, 1000);
    } catch (error: any) {
      errors.value = error?.response?.data.errors;
      logout();
    }
  };
  return { user, token, errors, login, logout, refresh };
});
