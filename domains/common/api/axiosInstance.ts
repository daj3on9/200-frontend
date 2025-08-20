import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 인터셉터
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    /*
    if (error.response && error.response.data && error.response.data.detail) {
      const errorData = error.response.data;
      const { title, detail } = errorData;

      console.error(`[🚨 API Error] ${title || 'Error'}: ${detail}`);
    } else if (error.response) {
      console.error(
        `🚨 Error Response: ${error.response.status} ${error.response.statusText}`
      );
    } else if (error.request) {
      console.error('🚨 Error Request:', error.request);
    } else {
      console.error('🚨 Error Message:', error.message);
    }
  */
    return Promise.reject(error);
  }
);

export default axiosInstance;
