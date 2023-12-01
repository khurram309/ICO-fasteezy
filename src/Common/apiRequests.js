import axios from "axios";

export var apiRequests = async (ENDPOINT, METHOD, PAYLOAD) => {
  const baseUrl = import.meta.env.VITE_UVO_HEALTH_API_URL;
  const options = {
    url: `${baseUrl}/${ENDPOINT}`,
    method: METHOD,
    headers: { "Content-Type": "application/json" },
    data: PAYLOAD
  };

  return axios(options);
}
