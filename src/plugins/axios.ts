import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: import.meta.env.API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Define routes that don't require authentication
// const unprotectedRoutes = ['/api/transactions/', 'api/phonenumber/'];

// Add request interceptor to include token
// api.interceptors.request.use(
  // (config) => {
  //   const token = localStorage.getItem('access_token');
  //   // Only add Authorization header for protected routes
  //   if (config.url && !unprotectedRoutes.includes(config.url) && token) {
  //     config.headers['Authorization'] = `Bearer ${token}`;
  //   }
  //   return config;
  // },
  // (error) => Promise.reject(error)
// );

// Add response interceptor to handle 401 errors and token refresh
api.interceptors.response.use(
  // (response) => response,
  // async (error) => {
  //   const originalRequest = error.config;

  //   if (error.response && error.response.status === 401 && !originalRequest._retry) {
  //     originalRequest._retry = true;

  //     try {
  //       const token = localStorage.getItem('access_token');

  //       if (!token) {
  //         localStorage.removeItem('access_token');
  //         window.location.href = '/login';
  //         return Promise.reject(error);
  //       }

  //       // Attempt to refresh the token
  //       const refreshResponse = await axios.post(
  //         `${import.meta.env.VITE_API_BASE_URL}/api/refresh`,
  //         {},
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );

  //       const newToken = refreshResponse.data.meta.access_token;
  //       localStorage.setItem('access_token', newToken);

  //       // Retry original request with new token
  //       originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
  //       return api(originalRequest);
  //     } catch (refreshError) {
  //       localStorage.removeItem('access_token');
  //       window.location.href = '/login';
  //       return Promise.reject(refreshError);
  //     }
  //   }

  //   return Promise.reject(error);
  // }
);

export default api;
