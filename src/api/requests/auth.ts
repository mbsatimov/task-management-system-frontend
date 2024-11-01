import { $api } from '../instance';
import type { LoginRequest, LoginResponse } from '@/types/models/auth';

export const AuthService = {
  postLogin: async ({ data, config }: AxiosRequestConfig<LoginRequest>) => {
    const res = await $api.get<LoginResponse>('login', config);
    if (data.email === 'example@gmail.com' && data.password === 'string123') {
      return {
        success: true,
        data: res,
        errors: [],
      };
    }

    // If credentials are incorrect, reject the request
    throw {
      success: false,
      data: null,
      errors: ['Invalid email or password'],
    };
  },

  getRefresh: async (requestConfig?: AxiosRequestConfig) => ({
    errors: [],
    success: true,
    data: await $api.get<LoginResponse>('refresh', requestConfig?.config),
  }),
};
