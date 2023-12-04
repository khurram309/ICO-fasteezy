import axios from "axios";

export var apiRequests = async (ENDPOINT, METHOD, PAYLOAD) => {
  const baseUrl = import.meta.env.VITE_UVO_HEALTH_API_URL;
  const options = {
    url: `${baseUrl}/${ENDPOINT}`,
    method: METHOD,
    headers: { "Content-Type": "application/json" },
    data: PAYLOAD
  };

  axios.interceptors.request.use(
    config => {
      const token = localStorage.getItem('accessToken')
      if (token) {
        config.headers['Authorization'] = token
      }
      // config.headers['Content-Type'] = 'application/json';
      return config
    },
    error => {
      Promise.reject(error)
    }
  )

  return axios(options);
}
