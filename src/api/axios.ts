import axios from "axios";
const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;

const customFetch = axios.create({
  baseURL: `https://api.unsplash.com/`,
  headers: {
    Authorization: ` Client-ID ${apiKey}`,
  },
});

export default customFetch;
