import axios from 'axios';

const axiosInstance = axios.create();


axiosInstance.interceptors.response.use(
  res => res,
  async error => {
    const { config, code, __retryCount = 0 } = error;
    if (!config || code !== 'ECONNABORTED' && !(error.response?.status >= 500)) {
      return Promise.reject(error);
    }

    const maxRetries = 3;
    config.__retryCount = __retryCount;

    if (__retryCount >= maxRetries) {
      return Promise.reject(error);
    }

    config.__retryCount += 1;
    const backoff = config.__retryCount * 1000;
    await new Promise(r => setTimeout(r, backoff));

    return axiosInstance(config);
  }
);
