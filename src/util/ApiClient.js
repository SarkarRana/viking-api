import axios from "axios";

const api = axios.create({});

// Add request interceptor to capture the start time
api.interceptors.request.use(
  (config) => {
    config.metadata = { startTime: new Date() }; // Store the start time in the config
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to calculate the time taken
api.interceptors.response.use(
  (response) => {
    const endTime = new Date();
    const startTime = response.config.metadata.startTime;
    response.config.metadata.timeTaken = endTime - startTime; // Calculate the time difference in milliseconds
    return response;
  },
  (error) => {
    const endTime = new Date();
    const startTime = error.config?.metadata?.startTime;
    if (startTime) {
      error.config.metadata.timeTaken = endTime - startTime; // Ensure time is still calculated in case of error
    }
    return Promise.reject(error);
  }
);

export default api;
