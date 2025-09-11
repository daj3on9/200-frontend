import axiosInstance from './axiosInstance';

/**
 * GET 요청
 * @param endpoint
 * @returns
 */
export const getAPI = async <T>(endpoint: string): Promise<T | null> => {
  const response = await axiosInstance.get<T>(endpoint);
  return response.data;
};

/**
 * POST 요청
 * @param endpoint
 * @param data
 * @returns
 */
export const postAPI = async <T, D>(
  endpoint: string,
  data: D
): Promise<T | null> => {
  const response = await axiosInstance.post<T>(endpoint, data);
  return response.data;
};

/**
 * UPDATE (PUT) 요청
 * @param endpoint
 * @param data
 * @returns
 */
export const updateAPI = async <T, D>(
  endpoint: string,
  data: D
): Promise<T | null> => {
  const response = await axiosInstance.put<T>(endpoint, data);
  return response.data;
};

/**
 *
 * @param endpoint
 * @param data
 * @returns
 */
// export const deleteAPI = async <T>(endpoint: string): Promise<T | null> => {
//   const response = await axiosInstance.delete<T>(endpoint);
//   return response.data;
// };

export const deleteAPI = async <T>(endpoint: string): Promise<T | null> => {
  const response = await axiosInstance.delete<T>(endpoint);
  return response.data;
};
