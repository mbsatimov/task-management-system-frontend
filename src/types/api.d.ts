type ApiResponse<T> = {
  success: boolean;
  errors: string[];
  data: T;
  meta?: {
    total?: number;
  };
};

type AxiosRequestConfig<Data = undefined> = Data extends undefined
  ? { config?: import('axios').AxiosRequestConfig }
  : { data: Data; config?: import('axios').AxiosRequestConfig };
