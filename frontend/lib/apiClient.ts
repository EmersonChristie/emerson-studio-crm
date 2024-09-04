import axios from 'axios';
import { SWRConfiguration } from 'swr';

// API Service Response Structure
interface ServiceResponse {
  success: boolean;
  statusCode: number;
  message: string;
  responseObject: any;
}

// Create an Axios instance with default configuration
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080',
  withCredentials: true, // This will send the cookies with every request
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptors for request and response
apiClient.interceptors.request.use(
  (config) => {
    // You can add additional headers here if necessary
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    console.log('Response from interceptor:', response);
    const data: ServiceResponse = response.data;

    if (!data.success) {
      // Handle failed responses based on status codes
      if (data.statusCode === 401) {
        // Handle unauthorized access by returning a specific error
        return Promise.reject({ ...new Error(data.message), statusCode: 401 });
      } else {
        // Throw the message to be caught by the calling function
        return Promise.reject(new Error(data.message));
      }
    }

    // Return the response object if the request was successful
    return { ...response, data: data.responseObject };
  },
  (error) => {
    console.log('Error from apiClient:', error);
    // Handle other errors that occur before the response is received
    return Promise.reject(error);
  }
);

// SWR fetcher function
export const fetcher = async (url: string) => {
  console.log('Fetching data from:', url);
  const response = await apiClient.get(url);
  console.log(
    'Response from apiClient:',
    JSON.stringify(response.data, null, 2)
  );
  return response.data;
};

// Default SWR configuration
export const swrConfig: SWRConfiguration = {
  fetcher,
  shouldRetryOnError: true,
  revalidateOnFocus: false,
  dedupingInterval: 60000 // Cache data for 60 seconds
};

export default apiClient;
