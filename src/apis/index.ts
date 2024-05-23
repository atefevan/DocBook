import axios from "axios";

const BASE_URL = `https://docbook-backend-delta.vercel.app`
// const BASE_URL = "http://localhost:3000";

const apiHandler = axios.create({
  baseURL: BASE_URL, // our API base URL
});

// Request interceptor for adding the bearer token
apiHandler.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("DOCBOOK_ACCESS_TOKEN"); // Assuming you store the token in localStorage
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default apiHandler;
