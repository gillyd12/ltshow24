import axios from 'axios';

export default function sendRequest() {

  const nonAuthClient = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API_HOST,
    withCredentials: false,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return { nonAuthClient };
}
